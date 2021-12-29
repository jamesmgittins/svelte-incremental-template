<script lang="ts">
   import { formatNumber } from "../gamelogic/utils";
   import MoneyButton from "../components/MoneyButton.svelte";
   import { gameModel } from "../gamelogic/gamemodel";
   import GeneratorList from "../components/GeneratorList.svelte";
</script>

<h1>Svelte Incremental Game Template</h1>
<p>
   The current amount of money is
   <strong>${formatNumber($gameModel.saveData.money, 2)}</strong>
</p>
<MoneyButton />
<div>
   <GeneratorList />
</div>

<style>
   div {
      display: grid;
      grid-template-columns: repeat(1, 100%);
   }

   @media screen and (min-width: 992px) {
      div {
         grid-template-columns: repeat(2, 50%);
      }
   }
</style>
