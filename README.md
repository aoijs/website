<br/>

<div align="center" style="margin: 30px;">
<a href="https://aoi.js.org/">
  <img src="https://github.com/aoijs/website/blob/master/assets/images/aoijs-banner.png?raw=true"   style="width:300px;" align="center"  alt="aoi.js"/>
</a>
<br />
<br />

<div align="center">
    <a href="https://aoi.js.org/">Home Page</a> |
    <a href="https://discord.gg/HMUfMXDQsV">Discord</a> |
    <a href="https://aoi.js.org/wikis">Community Wikis</a> |
    <a href="https://aoi.js.org/docs/">Documentation</a>
</div>
</div>
<br />

<div align="center"><strong>aoi.js Official Documentation</strong><br>

<br />

</div>

<div align="center">

[![Discord](https://img.shields.io/discord/773352845738115102.svg?label=&logo=discord&logoColor=ffffff&color=5865F2&labelColor=5865F2)](https://discord.gg/HMUfMXDQsV)
[![NPM](https://img.shields.io/npm/v/aoi.js.svg)](https://www.npmjs.com/package/aoi.js)
[![Downloads](https://img.shields.io/npm/dt/aoi.js.svg)](https://www.npmjs.com/package/aoi.js)
[![License](https://img.shields.io/npm/l/aoi.js.svg)](https://github.com/AkaruiDevelopment/aoi.js/blob/v6/LICENSE)
[![Stars](https://img.shields.io/github/stars/AkaruiDevelopment/aoi.js.svg)](https://github.com/AkaruiDevelopment/aoi.js/stargazers)
[![Crowdin](https://badges.crowdin.net/aoijs-documentation/localized.svg)](https://crowdin.com/project/aoijs-documentation)

</div>

## What is aoi.js?

aoi.js is a JavaScript library that is designed to make it easy to build Discord bots. It is open-source and free to
use, and provides a simple, easy-to-use interface for interacting with the Discord API and handling events. aoi.js is
suitable for beginners who are new to building bots, as well as experienced developers who want to save time and
streamline their workflow.

## Setup

```javascript
const { AoiClient } = require("aoi.js");

const client = new AoiClient({
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
      dbType: "KeyValue",
    },
  },
});

// Ping Command
client.command({
  name: "ping",
  code: `Pong! $pingms`,
});
```

### Interaction Command Setup

```javascript
const { AoiClient } = require("aoi.js");

const client = new AoiClient({
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
      dbType: "KeyValue",
    },
  },
});

// Create Interaction Ping Command
client.command({
  name: "create",
  code: `$createApplicationCommand[$guildID;ping;Pong!;true;slash]`,
});
```

## Contribution

[Refer to contribution documentation for more information](https://github.com/AkaruiDevelopment/aoi.js/blob/v6/.github/CONTRIBUTING.md)

## Our ♥️ Contributors

### Aoi.js

[![AkaruiDevelopment/aoi.js](https://contrib.rocks/image?repo=AkaruiDevelopment/aoi.js)](https://github.com/AkaruiDevelopment/aoi.js)

### Documentation

[![aoijs/website](https://contrib.rocks/image?repo=aoijs/website)](https://github.com/aoijs/website)
