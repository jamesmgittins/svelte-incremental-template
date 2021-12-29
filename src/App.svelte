<!-- 
	App.svelte is the first svelte file the application loads.
	svelte-spa-router handles navigation between different pages.
	The pages are stored in src/routes as .svelte files.
	They need to be added to the const routes in this file. Then they can be navigated to.
-->
<script lang="ts">
   import Router from "svelte-spa-router";
   import { location } from "svelte-spa-router";
   import Home from "./routes/Home.svelte";
   import Options from "./routes/Options.svelte";
   import NotFound from "./routes/NotFound.svelte";
   import Notifications from "./components/Notifications.svelte";

   const routes = {
      "/": Home,
      "/options": Options,

      // Catch-all. This is optional, but if present it must be the last
      "*": NotFound,
   };
</script>

<div>
   <!-- This is the HTML section where the main navigation menu lives, using emojis for quick and dirty icons -->
   <ul>
      <li><a href="#/" class:active={$location == "/"}>🏠 Home</a></li>
      <li>
         <a href="#/options" class:active={$location == "/options"}>⚙️ Options</a>
      </li>
   </ul>

   <!-- Add the Notifications component so messages appear on every page -->
   <Notifications />

   <!-- Router handles displaying each individual page -->
   <Router {routes} />
</div>

<!-- This is where CSS for the navigation menu can be defined -->
<style>
   ul {
      padding: 0;
   }

   li {
      display: inline-block;
   }

   a {
      text-decoration: none;
      transition: all 0.5s;
      padding: 0.5rem;
   }

   a:hover,
   a.active {
      background-color: #fff;
   }

   div {
      max-width: 100%;
      margin: 0 auto;
   }

   @media screen and (min-width: 992px) {
      div {
         max-width: 80%;
      }
   }
</style>
