<script lang="ts">
   import { flip } from "svelte/animate";
   import { messageQueue } from "../gamelogic/notifications";
   import Notification from "./Notification.svelte";
</script>

<!-- 
    Layout for the list of notification messages
    animate:flip will make the messages move smoothly up the list when one is removed
-->
<div>
   {#each $messageQueue as message (message.id)}
      <span animate:flip>
         <Notification {message} />
      </span>
   {/each}
</div>

<style>
   div {
      position: fixed;
      top: 1rem;
      right: 1rem;
      display: grid;
      justify-items: end;
   }

   span {
      display: inline-block;
      width: fit-content;
   }
</style>
