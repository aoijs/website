---
title: Introduction
description: Setting up aoi.panel with ease.
id: aoipanel-introduction
---

# @akarui/aoi.panel Documentation

[![aoi.panel](https://raw.githubusercontent.com/aoijs/website/main/assets/images/aoipanel-banner.png)](https://github.com/AkaruiDevelopment/panel/blob/main/examples/)

:::info

Use the hyperlinks to jump quickly across files.

- aoi.panel, panel class and its parameters.
    - [Jump to File](./panel.md)
- Advanced Features, usage of multiple accounts, custom pages and more.
    - [Jump to File](./advanced.md)  

:::

## Table Of Contents

<!-- no toc -->
- [Installation](#installation)
- [Getting Started](#installation)
  - [Basic Usage](#basic-usage-latest-version)

## Installation

```php
npm i @akarui/aoi.panel
```

## Basic Usage (latest version):

:::info Using Hosts  
The setup is basically the same, but the process is different.

You would need to use the **server** port instead of a random port choosen by you. The port can be mostly found on the right side besides the console window.  
:::

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
        db: require("@akarui/aoi.db"),
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
    port: 3000, // port on which website is hosted.
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