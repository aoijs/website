---
title: $botCount
description: '$guildBotCount gibt die Menge an Bots in deiner Gilde zurück.'
id: botCount
---

`$guildBotCount` wird die Menge an Bots in deiner Gilde zurückgeben.

## Verwendung

```php
$guildBotCount[guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                  | Erforderlich |
| -------- | ---------- | --------------------------------------------- |:------------:|
| guildID? | ganze Zahl | Gilden-ID der Gilde, die du abrufen möchtest. |    falsch    |

## Beispiel(e)

Dies gibt die Anzahl der Bots in deiner Gilde zurück:

```javascript
bot.command({
    name: 'guildBotCount',
    code: `
  $guildBotCount
  `
});
```