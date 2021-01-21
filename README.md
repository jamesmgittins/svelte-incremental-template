
# svelte incremental game template

# [Demo](https://jamesmgittins.github.io/svelte-incremental-template/)

This is a project template for building an incremental game with [Svelte](https://svelte.dev) and **TypeScript**. It lives at https://github.com/jamesmgittins/svelte-incremental-template.

This project includes **svelte-spa-router** for hash routing. And **lz-string** for data compression.

Basic incremental game functionality has been implemented, including a main loop, some example upgrades, a notification system, saving, loading, and offline progress.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit jamesmgittins/svelte-incremental-template my-game
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*


## Get started

Install the dependencies...

```bash
cd my-game
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).
