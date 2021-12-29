import { writable } from 'svelte/store';

/**
 * Svelte store to hold an array of messages
 */
export const messageQueue = writable([] as Message[]);

/**
 * How long should each message be displayed in ms
 */
const messageTime = 4000;

/**
 * Used to get a unique id for each message
 */
let idNumber = 0;

/**
 * Simple class to hold a string and an ID used to display messages to the player.
 * This could be expanded to include icons, sound effects, css classes for animations etc.
 */
export class Message {
   public message: string;
   public id: number;

   constructor(message: string) {
      this.message = message;
      this.id = idNumber++;
   }
}

/**
 * Function to add a message to the message queue
 * @param message Message to be shown to the player
 */
export function sendMessage(message: string) {
   // create a message object
   const notification = new Message(message);

   // add the message to the message queue
   messageQueue.update(m => m = [...m, notification]);

   // create a timeout to automatically remove the message after messageTime elapsed
   setTimeout(() => {
      messageQueue.update(m => m = m.filter(e => e.id != notification.id));
   }, messageTime)
}

