<script lang="ts">
    import { fly } from 'svelte/transition';
    import { flip } from 'svelte/animate';
    import { sineInOut } from 'svelte/easing';
    import { messageQueue } from '../gamelogic/notifications';
</script>

<div>
    {#each $messageQueue as message (message.id)}
        <span transition:fly={{x: 500, duration : 500, easing: sineInOut}} animate:flip>{message.message}</span>
    {/each}
</div>


<style>
    div {
        position: fixed;
        top: 2rem;
        right:2rem;
        display: grid;
        grid-template-columns: 1;
    }

    span {
        display: block;
        padding: 2rem;
        border:1px solid #ccc;
        margin-bottom: 1rem;
        background-color: #eee;
    }
</style>

