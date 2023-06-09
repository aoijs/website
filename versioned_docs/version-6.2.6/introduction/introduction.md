---
title: Welcome to aoi.js Documentation
description: The beginning process of how to use aoi.js and all its features.
slug: /
---

![aoijs](https://github.com/aoijs/website/blob/master/assets/images/aoijs-banner.png?raw=true)

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
