---
title: Introduction
description: The basic introduction of aoi.js
slug: /
---

**Welcome to the page of aoi.js Documentation**

### Introduction

![aoijs](https://raw.githubusercontent.com/aoijs/website/main/assets/images/aoijs-v5.png)

**The most advanced string-based package to create a Discord Bot fast and powerful.**

[![Discord Server](https://img.shields.io/discord/773352845738115102?color=5865F2\&logo=discord\&logoColor=white)](https://aoi.js.org/invite) [![NPM Version](https://img.shields.io/npm/v/aoi.js.svg?maxAge=3600)](https://www.npmjs.com/package/aoi.js) [![NPM Downloads](https://img.shields.io/npm/dt/aoi.js.svg?maxAge=3600)](https://www.npmjs.com/package/aoi.js)

## Table of Contents
  - [Features](#features)
  - [Function usage Example](#function-usage-example)
    - [How does it work?](#how-does-it-work)
  - [Events](#events)
  - [Database](#database)
  - [Music Integration](#music-integration)
  - [Optional Extensions](#optional-extensions)
  - [Disclaimer](#disclaimer)
  - [Links](#links)

## Features

- Built-in support of [database](https://www.npmjs.com/package/dbdjs.db) by default and ready for multipurpose.
- Built-in 600+ functions, simple and easy to learn.
- Simple to learn, all in string-based and compact.
- Support of extensions available to be used by the community.

## Function usage Example

```php
$authorID - Return the author ID/the userID who executed the function
```

## How does it work?

It's fairly simple, by using `$` as a sense of a function to execute, it's run by a command.
By using `$` after the function name, and its additional fields, (if any) it'll work as intended by it function.

## Events

Events are the most important factor in creating a Discord Bot. This helps developers create certain events to occur within their Client. There are several events within aoi.js, an example event is when the Client is ready and logged onto the API.

```javascript
bot.readyCommand({ //Event Command
    channel: "Channel ID", //The channel where the Client will log. (optional)
    code: `Code to execute` //This can be a message or code to execute.
})
```

## Database

With aoi.js powerful integration of database support, it has allowed several custom databases to work aside with aoi.js. Below is an example using the default database, this is not needed.

```javascript title="index.js"
const aoijs = require("aoi.js")

const bot = new aoijs.AoiClient({
token: "DISCORD BOT TOKEN",
prefix: "DISCORD BOT PREFIX",
intents: ["GUILDS", "GUILD_MESSAGES"],

//INSERT THE FOLLOWING CODE

  database: {
    db: require("dbdjs.db"),
    type: "dbdjs.db",
    path: "./database/",
    tables: ["main"],
  }
})
```

## Music Integration

Use this on your precaution, we do not endorse anything or affiliated with, we only add support towards it.

Do you want to make your Discord Bot different from others, possibly with the ability to play/stream music, it's simple and easy to use!

```php
$playTrack[type;name] - To play a track from the available third parties supported. 
```
More information in our [documentation](https://aoi.js.org/extensions/aoi.music/aoimusic-introduction)

## Optional Extensions

- [@akarui/aoi.music](https://www.npmjs.com/package/@akarui/aoi.music) to enable Music Functions compatibility. (`npm install @akarui/aoi.music`)
- [@akarui/aoi.panel](https://www.npmjs.com/package/@akarui/aoi.panel) to enable Panel compatibility. (`npm install @akarui/aoi.panel`)
    
## Disclaimer
    
aoi.js is not affiliated or associated with Discord or any other services.

aoi.js is managed by [Akarui Development Team](https://discord.gg/HMUfMXDQsV)   
    
## Links
- [Website](https://aoi.js.org)
- [NPM](https://www.npmjs.com/package/aoi.js)
- [Github](https://github.com/AkaruiDevelopment/aoi.js)
- [Discord Support Server](https://discord.gg/HMUfMXDQsV)
- [Documentation](https://aoi.js.org/docs/)