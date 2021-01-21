<script lang="ts">
    import { fly, fade } from 'svelte/transition';
    import { flip } from 'svelte/animate';
    import { sineInOut } from 'svelte/easing';
    import { messageQueue } from '../gamelogic/notifications';
</script>

<!-- 
    Layout for the list of notification messages 
    If a message becomes more complex it may need to be broken out into a separate component
-->
<div>
    {#each $messageQueue as message (message.id)}
        <span in:fly={{x: 200, duration : 500, easing: sineInOut}} out:fade animate:flip>{message.message}</span>
    {/each}
</div>


<style>
    div {
        position: fixed;
        top: 1rem;
        right:1rem;
        display: grid;
        grid-template-columns: 1;
    }

    span {
        display: block;
        padding: 1rem 2rem;
        border:1px solid #ccc;
        margin-bottom: 1rem;
        background-color: #eee;
    }
</style>

