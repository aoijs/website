---
title: aoi.panel events
description: All about aoi.panel's events.
id: aoipanel-events
---

## `loadPanel()`

The `loadPanel()` function is a crucial step in using the `@akarui/aoi.panel` package. It is responsible for loading the panel, which is an essential component required for the proper functioning of the package. Without calling the `loadPanel()` function, the panel will not work as intended.

### Usage

To load the panel, you need to invoke the `loadPanel()` function. This function does not require any parameters. Here's an example of how you can use it:

```javascript
const { Panel } = require('@akarui/aoi.panel');

const panel = new Panel({
    username: "your-username", // username for logging in
    password: "password-here", // password for logging in
    secret: require('crypto').randomBytes(16).toString("hex"), // session secret
    port: 3000, // port on which website is hosted, not required! Default 3000
    bot: bot, // your aoi.js client
    mainFile: "index.js", // Main file where code is running. Not required, default taken from package.json
    commands: "./commands", // folder name in which all the edit needing files are there.
    interaction: "./interactions" // interactions folder
});

panel.loadPanel();
```

Make sure to replace `"your-username"` with your actual username and `"password-here"` with your password for logging into the panel. Additionally, ensure that you have the required dependencies (`@akarui/aoi.panel` and `crypto`) installed in your project.

Remember to call the `loadPanel()` function after creating an instance of the `Panel` class to properly load and set up the panel.

## `onError()`

The `onError()` function plays a crucial role in handling errors that may occur while using the `@akarui/aoi.panel` package. Its purpose is to listen for errors and prevent them from crashing your code. By utilizing this function, you can effectively capture and handle errors, ensuring the smooth execution of your application.

### Usage

To implement error handling with the `onError()` function, make sure you have already loaded the panel using the `loadPanel()` function as shown above. Then, call the `onError()` function within your code. Here's an example:

```javascript
const { Panel } = require('@akarui/aoi.panel');

const panel = new Panel({
    username: "your-username", // username for logging in
    password: "password-here", // password for logging in
    secret: require('crypto').randomBytes(16).toString("hex"), // session secret
    port: 3000, // port on which website is hosted, not required! Default 3000
    bot: bot, // your aoi.js client
    mainFile: "index.js", // Main file where code is running. Not required, default taken from package.json
    commands: "./commands", // folder name in which all the edit needing files are there.
    interaction: "./interactions" // interactions folder
});

panel.loadPanel();
panel.onError();
```

By calling `onError()`, you enable the error listening mechanism provided by the `@akarui/aoi.panel` package. This function ensures that errors are caught and sent to the panel page.