---
title: '$updateCommands'
description: '$updateCommands recargará los comandos de tu carpeta de comandos / hará que los cambios sean efectivos.'
id: updateCommands
---

`$updateCommands` volverá a cargar los comandos de tu carpeta de comandos / hará que los cambios sean efectivos.

## Uso

```php
$updateCommands
```

* Sólo funcionará si usas un manejador de comandos, ejemplo a continuación:

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
loader.load(bot.cmd, "./commands/"); // su directorio de comandos.
```

## Ejemplo(s)

Esto actualizará los comandos de tu bot sin reiniciarlo:

```javascript
bot.command({
    name: "updateCommands",
    code: `
    $updateCommands
    `
});
```