<script lang="ts">
   import { gameModel } from "../gamelogic/gamemodel";
   import { sendMessage } from "../gamelogic/notifications";
   import { resetSaveGame, saveSaveGame } from "../gamelogic/saveloadfunctions";

   /**
    * On click action to save the game in localstorage
    */
   function saveGame() {
      saveSaveGame($gameModel.saveData);
      sendMessage("Game has been saved");
   }

   /**
    * On click action to reset the save game in localstorage
    */
   function resetGame() {
      if (confirm("Are you sure you want to reset your game?")) {
         resetSaveGame();
         sendMessage("Save Data has been wiped");
      }
   }
</script>

<h1>Options</h1>

<button on:click={saveGame}>Save Game</button>

<button on:click={resetGame}>Reset Save Game</button>

<style>
</style>
