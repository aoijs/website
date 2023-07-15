---
title: Introduction of aoi.canvas
description: What aoi.canvas is and how to use it.
id: aoi-canvas
---

### Table of Contents

- [Introduction](#introduction)
- [Setup](#setup)
  - [Installation](#installation)
- [Feature Preview](#feature-preview)

---

## Introduction

[aoi.canvas@1.0.1-canva](https://www.npmjs.com/package/aoi.canvas?activeTab=readme) is a NPM package created by [devlordduck2](https://discord.com/users/1096717977304453160) which adds the ability to use canvas to aoi.js

aoi.canvas supports *almost* everything as the original canvas, its basically just simplified and uses aoi.js function syntax.

## Setup

**NPM Package**: https://www.npmjs.com/package/aoi.canvas  
**Creator**: [devlordduck2](https://discord.com/users/1096717977304453160)

### Installation

```php
npm install aoi.canvas
```

---

```js title="index.js"
const { AoiClient } = require("aoi.js");
const aoicanvas = require("aoi.canvas");

const bot = new AoiClient({
    token: "DISCORD BOT TOKEN",
    prefix: "DISCORD BOT PREFIX",
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

aoicanvas.load({
    bot: bot,
    DownloadFolder: "./canvasdownloads/"
})

// Ping Command Example
bot.command({
    name: "ping",
    code: `Pong! $pingms`
});

// Leref Command Example
bot.command({
    name: "leref",
    code: `
$sendCanvas[lerefPro;msg]
$lerefPro
`
});
```

## Feature Preview


![preview](https://cdn.discordapp.com/attachments/832704676096245800/1129371725184909342/SmartSelect_20230714_141946_Discord.jpg)

![preview](https://cdn.discordapp.com/attachments/832704676096245800/1129109315068907642/SmartSelect_20230713_205624_Discord.jpg)