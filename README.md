<br/>

<div align="center" style="margin: 30px;">
<a href="https://aoi.js.org/">
  <img src="https://github.com/aoijs/website/blob/master/assets/images/aoijs-banner.png?raw=true"   style="width:350px;" align="center"  alt="aoi.js"/>
</a>
<br />
<br />

<div align="center"><strong>aoi.js Official Documentation</strong><br>
<div align="center">
    <a href="https://aoi.js.org/invite">Discord</a> |
    <a href="https://aoi.js.org/">Documentation</a> <br /> <br />
    <a href="https://starlight.astro.build"><img src="https://astro.badg.es/v2/built-with-starlight/tiny.svg" alt="Built with Starlight" width="140" height="20"></a>
</div>
</div>
<br />
</div>

## ❓ What is aoi.js?

aoi.js is a JavaScript library that is designed to make it easy to build Discord bots. It is open-source and free to
use, and provides a simple, easy-to-use interface for interacting with the Discord API and handling events. aoi.js is
suitable for beginners who are new to building bots, as well as experienced developers who want to save time and
streamline their workflow.

## 🚀 Setup

```javascript
const { AoiClient } = require("aoi.js");

const client = new AoiClient({
    token: "Discord Bot Token",
    prefix: "Discord Bot Prefix",
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage", "onInteractionCreate"],
    database: {
        type: "aoi.db",
        db: require("@akarui/aoi.db"),
        dbType: "KeyValue",
        tables: ["main"],
        securityKey: "a-32-characters-long-string-here"
    }
});

// Ping Command
client.command({
  name: "ping",
  code: `Pong! $pingms`
});
```

### Interaction Command Setup

```javascript
const { AoiClient } = require("aoi.js");

const client = new AoiClient({
    token: "Discord Bot Token",
    prefix: "Discord Bot Prefix",
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage", "onInteractionCreate"],
    database: {
        type: "aoi.db",
        db: require("@akarui/aoi.db"),
        dbType: "KeyValue",
        tables: ["main"],
        securityKey: "a-32-characters-long-string-here"
    }
});

// Create Interaction Ping Command
client.command({
  name: "create",
  code: `$createApplicationCommand[$guildID;ping;Pong!;true;true;slash]`
});
```

## 🐛 Contribution

[Refer to contribution documentation for more information](https://github.com/aoijs/aoi.js/blob/v6/.github/CONTRIBUTING.md)

### 🧑‍💻 Aoi.js

[![aoijs/aoi.js](https://contrib.rocks/image?repo=aoijs/aoi.js)](https://github.com/aoijs/aoi.js)

### 📄 Documentation

[![aoijs/website](https://contrib.rocks/image?repo=aoijs/website)](https://github.com/aoijs/website)
