import { gameModel, GameModel, updateGameModel } from "./gamemodel";

/**
 * Reference to the GameModel.
 * We use the subscribe function so if the store is updated our local instance will also update.
 */
let gameModelInstance : GameModel;
gameModel.subscribe(m => gameModelInstance = m);

/**
 * Button click value
 * @TODO Add functionality to increase the value of the button
 */
const buttonClickValue = 1;

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
	updateGameModel();
}


/**
 * Gets the current value of the button
 */
export function getButtonClickValue() : number {
	return buttonClickValue;
}