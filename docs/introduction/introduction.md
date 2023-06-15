---
title: Welcome to aoi.js Documentation
description: The beginning process of how to use aoi.js and all its features.
slug: /
---

:::danger Important

This is the brand new documentation for v7 development **THINGS MAY CHANGE**.

## Disclaimer

- This version of **aoi.js** is currently heavily in development, expect bugs and unfinished functions.
- There are currently around **80** functions.
- Everything on here is **SUBJECT TO CHANGE**.  
:::

![aoijs](https://github.com/aoijs/website/blob/master/assets/images/aoijs-banner.png?raw=true)

## Installation

<Tabs groupId="pref-install">
  <TabItem value="i-npm" label="npm">

  **node.js LTS or newer is required.**
  ```bash
  npm install aoi.js
  ```

  </TabItem>
  <TabItem value="i-yarn" label="yarn">

  **node.js LTS or newer is required.**
  ```bash
  yarn add aoi.js
  ```
  
  </TabItem>
</Tabs>

## Setup

```javascript
// imports
const { AoiClient, defaultCacheConfig } = require("aoi.js");
const { Intents } = require("aoiluna");

// create a new client
const bot = new AoiClient({
  token: "TOKEN",
  prefixes: "PREFIX",
  intents: Intents.Guilds | Intents.GuildMessages | Intents.MessageContent,
  events: ['MessageCreate','Ready'],
  caches: defaultCacheConfig(),
})

// create a command
bot.command({
  name: "ping",
  code: `Pong! $pingms`
});
```

## Disclaimer

**[Aoi.js](https://www.npmjs.com/package/aoi.js)** is not affiliated or associated with Discord or any other services.

## Links

- [Website](https://aoi.js.org)
- [NPM](https://www.npmjs.com/package/aoi.js)
- [Github](https://github.com/AkaruiDevelopment/aoi.js)
- [Discord Support Server](https://discord.gg/HMUfMXDQsV)
