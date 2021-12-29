import { GameModel, gameModel, SaveData } from "./gamemodel";
import { compress, decompress } from 'lz-string';

/**
 * This is the key the save data will be stored under inside localstorage
 */
const storageName = 'sveltedata';

/**
 * Load the save data from localstorage.
 * If no data is found just return a new SaveData with default values.
 */
export function loadSaveGame(): SaveData {

   // using a try/catch in case this fails for some reason
   try {

      // see if data exists first
      if (localStorage.getItem(storageName)) {

         // get data from localstorage, decompress it using lz-string, then parse it back into a javascript object
         const saveData = JSON.parse(decompress(localStorage.getItem(storageName)));

         console.log('SaveData loaded:');
         console.log(saveData);

         // migrate the data so we know it is good to use
         dataMigrate(saveData);

         return saveData;
      }

      // if nothing in storage just create a new one
      return new SaveData();

   } catch (error) {
      console.error(error); // log the error so at least we can see it
   }

}

/**
 * Saves the data to localstorage
 * @param saveData SaveData
 */
export function saveSaveGame(saveData: SaveData) {
   // if save data exists
   if (saveData) {

      // set the last saved time
      saveData.lastSaved = Date.now();

      try {
         // Use JSON.stringify to turn the object into a string, then compress with lz-string,
         // before setting it in localstorage
         localStorage.setItem(storageName, compress(JSON.stringify(saveData)));

      } catch (error) {
         console.error(error); // log the error so at least we can see it
      }

   }
}

/**
 * This function will help to update any data that was saved before new variables were added.
 * Otherwise this can cause errors when something you expected to be there is not there.
 */
function dataMigrate(saveData: SaveData) {

   // create a new saveData to use as a reference
   const master = new SaveData();

   // get an array of the properties of saveData
   const keys = Object.getOwnPropertyNames(master);

   // check each property to make sure it exists on the save data
   keys.forEach((prop) => {
      if (typeof saveData[prop] === 'undefined') {
         console.log(`${prop} was undefined, adding it to saveData`);
         saveData[prop] = master[prop];
      }
   })
}


/**
 * Resets save game in localstorage and resets the gameModel
 */
export function resetSaveGame() {

   // remove from local storage
   localStorage.removeItem(storageName);

   // update the stored gameModel with a new one
   gameModel.update(g => g = new GameModel());
}