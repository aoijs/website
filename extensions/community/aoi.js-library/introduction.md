---
title: Introduction of aoi.js-library
description: What aoi.js-library is and how to use it.
id: introduction
---

### Table of Contents

- [Introduction](#introduction)
- [Setup](#setup)
  - [Installation](#installation)
- [Adding your Plugins](#adding-your-plugins)
- [Plugins](#plugins)
  - [Loading Plugins](#loading-plugins)
  - [Available Plugins](#available-plugins)
- [User Plugins](#user-plugins)
  - [User Plugin Structure](#user-plugin-structure)
  - [Example User Plugin (aoi.js)](#example-user-plugin-aoijs)

---

## Introduction

[aoi.js-library@1.0.1](https://www.npmjs.com/package/aoi.js-library?activeTab=readme) is a NPM package created by [leref](https://discord.com/users/608358453580136499) which adds the ability to load & create plugins to aoi.js.

aoi.js-library is a community powered NPM package which allows users to load specific plugins which add more functionality to aoi.js

## Setup

**NPM Package**: https://www.npmjs.com/package/aoi.js-library  
**Creator**: [leref](https://discord.com/users/608358453580136499)

### Installation

```php
npm install aoi.js-library
```

---

```js title="index.js"
const { AoiClient } = require("aoi.js");
const { Plugins } = require("aoi.js-library");

const bot = new AoiClient({
    token: "DISCORD BOT TOKEN",
    prefix: "DISCORD BOT PREFIX",
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage"],
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

// Ping Command
bot.command({
    name: "ping",
    code: `Pong! $pingms`
});

new Plugins({ bot }).loadPlugins([
    'default/comment',
]); // Load Plugins Functions from aoi.js-library 
```

## Adding your Plugins

You can even add your own plugins to this package and make it available for anyone to use!

Visit the [Github Repository](https://github.com/Leref/aoi.js-library/pulls) and submit a Pull Request!

Wait for feedback and for it to get accept, and done! That's it.

## Plugins
The Plugins class provides a way to load and manage plugins for your Discord bot.

### Loading Plugins:

The Plugins class provides a way to load and manage plugins for your Discord bot.

To load an available plugin:

```js
new Plugins({ bot }).loadPlugins([
    "author/pluginName"
]);
```

Example which loads the comment plugin:
```js
new Plugins({ bot }).loadPlugins([
    'default/comment',
]);
```
By adding this function in the field, it'll only enable $comment, it supports an multiple array if provided otherwise ignored.

### Available Plugins:
```php
$os
$comment
```

## User Plugins
The UserPlugins class allows you to load user-specific plugins for your Discord bot from a directory of your choice.

To load user plugins:

```js
new UserPlugins({ bot }).loadUserPlugins('path');
```
Replace path with the actual path to the directory where your user plugins are located.

### User Plugin Structure
User plugins must be in the following format:

```js title="path/plugins.js"
module.exports = {
    name: "Plugin Name", //$pluginName
    type: "Plugin Type", //aoi.js or djs
    code: `Plugin Code` //pluginCode
}
```

### Example User Plugin (aoi.js)

```js title="path/plugins.js"
module.exports = {
    name: "$lerefIcon", //$pluginName
    type: "aoi.js", //aoi.js or djs
    params: [], //aoi.js params
    code: `$lerefAvatar` //pluginCode
}
```