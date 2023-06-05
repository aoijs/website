---
title: Introduction
description: Setting up aoi.panel with ease.
id: aoipanel-introduction
---

# @akarui/aoi.panel Documentation

## Table Of Contents

| Name              | Description                           | Link                  |
|-------------------|---------------------------------------|-----------------------|
| The panel Class   | The panel Class and its parameters    | [link](./panel.md)  | 
| Advanced Features | Multiple accounts, custom pages, etc. | [link](./advanced.md) | 

## To View Examples Click **[here](https://github.com/AkaruiDevelopment/panel/blob/main/examples/)**

## Installation

```bash
npm i @akarui/aoi.panel
```

## Basic Usage (aoi.js v5):

```javascript
const { Panel } = require("@akarui/aoi.panel");
const { AoiClient } = require("aoi.js");

const bot = new AoiClient({
    token: "Discord Bot Token",
    prefix: "Discord Bot Prefix",
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage", "onInteractionCreate"],
    database: {
        type: "aoi.db",
        db: require("aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        }
    }
});

const panel = new Panel({
    username: "your-username", // username for logging in
    password: "password-here", // password for logging in
    secret: require('crypto').randomBytes(16).toString("hex"), // session secret
    port: 3000, // port on which website is hosted, not required! Default 3000
    bot: bot, // your aoi.js client
    mainFile: "index.js", // Main file where code is running.Not required, default taken from package.json
    commands: "./commands", // folder name in which all the edit needing files are there.
    interaction: "./interactions" // interactions folder
});
panel.loadPanel(); // Load The Panel

panel.onError(); // Will detect errors, and send it to aoi.panel's error page.
```

* Panel Login Page

![image](https://cdn.discordapp.com/attachments/1082168708866244648/1083399286517149746/YAAAAASUVORK5CYII.png)

* Main Panel Page

![image](https://cdn.discordapp.com/attachments/1082168708866244648/1083399889544822885/vw6MvGAAAAAElFTkSuQmCC.png)

* Guilds Page

![image](https://cdn.discordapp.com/attachments/1082168708866244648/1083400360418357272/27v8HACxCKBCoV2wAAAAASUVORK5CYII.png)

* Command Editor

![image](https://cdn.discordapp.com/attachments/1082168708866244648/1083400876028334191/wNA32SssHUi2AAAAABJRU5ErkJggg.png)