/*
* This file is the main entrance point of the application.
* It creates an instance of App.svelte and adds it to the body of the HTML document.
*/

import App from './App.svelte';
import { startGameLoop } from './gamelogic/gameloop';

const app = new App({
	target: document.body
});

startGameLoop();

export default app;