---
title: '$updateCommands'
description: '$updateCommands wird Ihre Befehle Ihres Befehlsordners neu laden / werden Änderungen wirksam.'
id: updateCommands
---

`$updateCommands` wird die Befehle Ihres Befehlsordners neu laden / Änderungen wirksam machen.

## Verwendung

```php
$updateCommands
```

* Funktioniert nur, wenn du einen Befehlshandler verwendest, Beispiel unten:

```javascript
const { AoiClient, LoadCommands } = require("aoi. s");

const bot = new AoiClient({
    token: "DISCORD BOT TOKEN",
    Präfix: "DISCORD BOT PREFIX",
    intents: ["GuildMessages", "Nachrichteninhalt", "Gilden"],
    Ereignisse: ["onMessage", "onInteractionCreate"],
    Datenbank: {
        type: "aoi. b",
        db: require("@akarui/aoi. b"),
        Tabellen: ["main"],
        Pfad: ". datenbank/",
        Extraoptionen: {
            dbType: "KeyValue"
        }
    }
});

const loader = new LoadCommands(bot);
loader. oad(bot.cmd, "./commands/"); // Ihr Befehlsverzeichnis.
```

## Beispiel(e)

Dies wird die Befehle Ihres Bots aktualisieren, ohne ihn neu zu starten:

```javascript
bot.command({
    name: "updateCommands",
    code: `
    $updateCommands
    `
});
```