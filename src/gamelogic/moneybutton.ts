import { GameModel, gameModel } from "./gamemodel";

/**
 * Reference to the GameModel
 */
let gameModelInstance : GameModel;

// Subscribe to the store so our local copy of game model is updated whenever gamemodel changes
gameModel.subscribe(instance => gameModelInstance = instance);


/**
 * Button click value
 * @TODO Add functionality to increase the value of the button
 */
let buttonClickValue = 1;

/**
 * Function for clicking the button.
 * This can be called by actually clicking the button.
 * Or by the generators that click the button automatically.
 * @param times the number of times to click (defaults to 1)
 */
export function clickTheButton(times : number = 1) {

    // add money value * number of clicks
    gameModelInstance.addMoney(buttonClickValue * times);

    // update the svelte store
    gameModel.update(m => m = gameModelInstance);
}


/**
 * Gets the current value of the button
 */
export function getButtonClickValue() : number {
    return buttonClickValue;
}