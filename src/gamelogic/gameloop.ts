import { gameModel, GameModel } from "./gamemodel";
import { sendMessage } from "./notifications";
import { saveSaveGame } from "./saveloadfunctions";
import { generators } from "./upgrades";
import { formatWhole } from "./utils";

/**
 * Reference to the GameModel.
 * We use the subscribe function so if the store is updated our local instance will also update.
 */
let gameModelInstance: GameModel;
gameModel.subscribe(m => gameModelInstance = m);

/**
 * how often to run the loop. 200ms = 5 times per second 
 * 200ms or 100ms is usually fast enough to feel responsive without wasting too much CPU time
 */
const ms = 200;

/**
 * How often to auto save the game. 60_000 = 60 seconds.
 */
const autoSaveTime = 60_000;

/**
 * A reference to the interval that can be used to stop it if we need to
 */
let interval: number;

/**
 * This function will start the game loop running at the desired rate, and save a reference to the interval so it can be stopped later
 */
export function startGameLoop() {

   console.log('calculating offline progess')
   calculateOfflineProgress();

   console.log('starting the game loop');
   interval = setInterval(gameLoop, ms);
}

// some datetime values we will be using to calculate how much time has passed
let lastRunTime = Date.now();
let lastSaved = Date.now();

/**
 * deltaT or delta time is the time difference in seconds since the last time the loop ran
 */
let deltaT: number = 0;

/**
 * The game loop function that runs multiple times per second in the background.
 */
function gameLoop() {
   const currentTime = Date.now();

   // if lastSaved was more than 60 seconds ago we should save the game
   if (currentTime - lastSaved > autoSaveTime) {
      lastSaved = currentTime;
      saveSaveGame(gameModelInstance.saveData);
      sendMessage("Game auto-saved");
   }

   // calculate deltaT based on the current time and the last run time
   // we are using Math.max and Math.min to make sure deltaT is between 0 and 1 seconds
   deltaT = Math.max(Math.min((currentTime - lastRunTime) / 1000, 1), 0);
   lastRunTime = currentTime;

   // Now we know what deltaT is we can update the game
   gameUpdate(deltaT);
}


/**
 * Function to update all game data based on time.
 * This is where all idle calculations should start so they can be 
 * used by the main loop and the offline progress function.
 * @param deltaT time in seconds since last update
 */
function gameUpdate(deltaT: number) {

   // update each generator
   generators.forEach(generator => generator.update(deltaT));
}


/**
 * Function to calculate the offline progress
 */
function calculateOfflineProgress() {

   // note how much we had before
   const moneyBefore = gameModelInstance.saveData.money;

   // calculate time in seconds since last saved
   const currentTime = Date.now();
   const offlineDeltaT = Math.max((currentTime - gameModelInstance.saveData.lastSaved) / 1000, 0);

   console.log(`Offline for ${offlineDeltaT} seconds`);

   // perform the game update for the total time
   gameUpdate(offlineDeltaT);

   // calculate total earned
   const moneyEarned = gameModelInstance.saveData.money - moneyBefore;

   sendMessage(`You have earned $${formatWhole(moneyEarned)} while offline!`);
}