---
title: '$updateCommands'
description: '$updateCommands will reload your commands of your command folder / will make changes effective.'
id: updateCommands
---

`$updateCommands` will reload your commands of your command folder / will make changes effective.

## Використання

```php
$updateCommands
```

* Will only work if you use a command handler, example below:

```javascript
const { AoiClient, LoadCommands } = require("aoi.js");

const bot = new AoiClient({
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
            dbType: "KeyValue"
        }
    }
});

const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./commands/"); // your command directory.
```

## Приклад(и)

This will update the commands of your bot without restarting it:

```javascript
bot.command({
    name: "updateCommands",
    code: `
    $updateCommands
    `
});
```