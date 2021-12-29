<script lang="ts">
   import { generators } from "../gamelogic/upgrades";
   import Generator from "./Generator.svelte";
</script>

<!-- Layout for a list of generator upgrades -->
<div>
   <h2>Generators</h2>
   {#each generators as generator}
      <Generator {generator} />
   {/each}
</div>

<style>
</style>
