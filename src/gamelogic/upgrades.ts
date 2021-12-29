import { gameModel, GameModel, updateGameModel } from "./gamemodel";
import { clickTheButton } from "./moneybutton";
import { saveSaveGame } from "./saveloadfunctions";

/**
 * Reference to the GameModel.
 * We use the subscribe function so if the store is updated our local instance will also update.
 */
let gameModelInstance: GameModel;
gameModel.subscribe(m => gameModelInstance = m);

/**
 * Abstract class that defines common Upgrade properties.
 */
abstract class Upgrade {
   public id: number; // unique id
   public name: string;
   public description: string;
   public basePrice: number;
   public multiplier: number;

   constructor(id: number, name: string, description: string, basePrice: number, multiplier: number) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.basePrice = basePrice;
      this.multiplier = multiplier;
   }

   /**
    * Get the count of how many of this upgrade have been bought.
    */
   getBoughtCount(): number {
      return gameModelInstance.saveData.upgradesBought[this.id] || 0;
   }


   /**
    * Get the count of how many of this upgrade have been generated.
    */
   getGeneratedCount(): number {
      return gameModelInstance.saveData.upgradesGenerated[this.id] || 0;
   }

   /**
    * Get the total count of this upgrade.
    */
   getTotalCount(): number {
      return this.getBoughtCount() + this.getGeneratedCount();
   }

   /**
    * Get the current price to buy one of these upgrades.
    * Formula to calculate the price is basePrice * (multiplier ^ bought)
    */
   getPrice(): number {
      return this.basePrice * Math.pow(this.multiplier, this.getBoughtCount());
   }

   /**
    * Attempt to purchase this upgrade.
    * Returns true if it was purchased, false if not.
    */
   purchase(): boolean {
      if (gameModelInstance.spendMoney(this.getPrice())) {
         // increase the amount owned
         gameModelInstance.saveData.upgradesBought[this.id] = this.getBoughtCount() + 1;
         // Update the svelte store
         updateGameModel();
         // Save game to localStorage
         saveSaveGame(gameModelInstance.saveData);
         return true;
      }
      return false;
   }
}

/**
 * Class to define how a Generator upgrade behaves.
 * Extends Upgrade, meaning it inherits all of the properties and functions.
 */
export class Generator extends Upgrade {
   // id of the upgrade this one generates
   public generatesId: number;
   // how long does it take to generate one
   public generateTime: number;
   // internal counter of how many have been generated
   private generated: number = 0;

   constructor(id: number, name: string, description: string, basePrice: number, multiplier: number, generatesId: number, generateTime: number) {
      super(id, name, description, basePrice, multiplier);
      this.generatesId = generatesId;
      this.generateTime = generateTime;
   }

   /**
    * Update this generator and generate some stuff!
    * @param deltaT Time in seconds since last update
    */
   update(deltaT: number) {

      // only do something if we have 1 or more of these
      const count = this.getTotalCount();
      if (count > 0) {

         // update the internal generated number based on time
         const generatedPerSecond = count / this.generateTime;
         this.generated += generatedPerSecond * deltaT;

         // if we have generated at least 1
         if (this.generated > 1) {
            if (this.generatesId) {
               // increase the amount owned
               gameModelInstance.saveData.upgradesGenerated[this.generatesId] =
                  (gameModelInstance.saveData.upgradesGenerated[this.generatesId] || 0) + Math.floor(this.generated);
            } else {
               // click the button x number of times
               clickTheButton(Math.floor(this.generated));
            }
            // reset the internal generated
            this.generated -= Math.floor(this.generated);

            // update the svelte store
            updateGameModel();
         }
      }
   }
}

/**
 * List of generators that can be bought
 */
export const generators = [
   new Generator(
      1, // id
      'Auto Clicker', // name
      'Automatically clicks the button every 10 seconds', // description
      10, // base price
      1.1, // multiplier
      null, // going to be lazy here and use null to describe clicking the button, for others it will be the id
      10 // time per generated
   ),
   new Generator(
      2,
      'Auto Clicker Buyer',
      'Automatically buys an auto clicker every 10 seconds',
      200,
      1.2,
      1,
      10
   ),
   new Generator(
      3,
      'Auto Clicker Buyer Buyer',
      'Automatically buys an auto clicker buyer every 10 seconds',
      5000,
      1.3,
      2,
      10
   ),
   new Generator(
      4,
      'Auto Clicker Buyer Buyer Buyer',
      'Automatically buys an auto clicker buyer buyer every 10 seconds',
      50000,
      1.4,
      3,
      10
   )
];


/**
 * Self executing function that will automatically run when the game loads in order to test
 * that the upgrade ids are all unique. This is only for validation.
 */
(() => {
   const ids = [];
   generators.forEach(e => {
      if (ids[e.id]) {
         alert(`Generator id: ${e.id} has been used more than once. All upgrade ids must be unique!`);
      }
      ids[e.id] = true;
   })
})();