<script lang="ts">
   import { gameModel } from "../gamelogic/gamemodel";
   import type { Generator } from "../gamelogic/upgrades";
   import { formatNumber, formatWhole } from "../gamelogic/utils";
   export let generator: Generator;

   // some svelte magic that means whenever the gameModel is updated we will refresh this generator
   $: $gameModel, (generator = generator);

   function purchase() {
      generator.purchase();

      // setting the generator to itself will cause the component to update
      generator = generator;
   }
</script>

<!-- The layout for a single generator upgrade -->
<div>
   <strong>{generator.name}</strong>
   <span>owned: <strong>{formatWhole(generator.getTotalCount())}</strong></span>
   <button on:click={purchase}>Buy for ${formatNumber(generator.getPrice(), 2)}</button>
   <p>{generator.description}</p>
</div>

<style>
   div {
      margin-bottom: 1rem;
      padding: 0.5rem;
      border: 1px solid #ccc;
   }
   p {
      margin: 0.5em 0;
   }

   button {
      float: right;
   }
</style>
