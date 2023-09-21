---
title: $updateCommands
description: $updateCommands will reload your commands of your command folder / will make changes effective.
id: updateCommands
---

`$updateCommands` will reload your commands of your command folder / will make changes effective.

## Usage

```php
$updateCommands
```

- Will only work if you use a command handler, example below:

```javascript
const { AoiClient } = require("aoi.js");

const client = new AoiClient({
  token: "DISCORD BOT TOKEN",
  prefix: "DISCORD BOT PREFIX",
  intents: ["GuildMessages", "MessageContent", "Guilds"],
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

client.loadCommands("./commands/", true); // your command directory.
```

## Example(s)

This will update the commands of your bot without restarting it:

```javascript
client.command({
  name: "updateCommands",
  code: `
    $updateCommands
    `,
});
```
