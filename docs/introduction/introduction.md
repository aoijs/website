---
title: Introduction
description: The beginning process of how to use aoi.js and all its features.
coverY: -4.149292149292149
slug: /
---

![aoijs](https://cdn.discordapp.com/attachments/1058843428831629443/1063251770228342895/aoijsbanner.png)

[![NPM downloads][download-image]][download-URL]
[![AoiJS Server][aoijs-server]][aoijs-server-URL]
[![NPM version][npm-image]][npm-URL]

[npm-image]: http://img.shields.io/npm/v/aoi.js.svg?color=42cfff
[npm-URL]: http://npmjs.org/package/aoi.js
[download-image]: https://img.shields.io/npm/dt/aoi.js.svg?color=3182b0
[download-URL]: https://npmjs.org/package/aoi.js
[aoijs-server]: https://img.shields.io/discord/773352845738115102?color=5865F2&logo=discord&logoColor=white
[aoijs-server-URL]: https://aoi.js.org/invite

## Features

- Built-in support of **[database](https://www.npmjs.com/package/aoi.db)** by default and ready for multipurpose.
- Built-in **630+** functions, simple and easy to learn.
- Simple to learn, all in string-based and compact.
- Support of extensions available to be used by the community.

## Installation

**node.js 16.9.0 or newer is required.**

```bash
npm install aoi.js
```

```bash
yarn add aoi.js
```

## Setup

```javascript
const { AoiClient } = require("aoi.js");

const bot = new AoiClient({
    token: "DISCORD BOT TOKEN",
    prefix: "DISCORD BOT PREFIX",
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage", "onInteractionCreate"]
});

// Ping Command Example
bot.command({
    name: "ping",
    code: `Pong! $pingms`
});

// Slash Interaction Command Example (ping)
/* You must execute the function below for the slash command to work:
$createApplicationCommand[$guildID;ping;Pong!;true;slash]
*/
bot.interactionCommand({
    name: "ping",
    prototype: "slash",
    code: `$interactionReply[Pong! $pingms;;;;everyone;false]`
});
```

## Disclaimer

**[Aoi.js](https://www.npmjs.com/package/aoi.js)** is not affiliated or associated with Discord or any other services.

## Links

- [Website](https://aoi.js.org)
- [NPM](https://www.npmjs.com/package/aoi.js)
- [Github](https://github.com/AkaruiDevelopment/aoi.js)
- [Discord Support Server](https://discord.gg/HMUfMXDQsV)
