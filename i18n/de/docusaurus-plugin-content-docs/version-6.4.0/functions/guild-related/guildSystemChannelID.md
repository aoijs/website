---
title: '$guildSystemChannelID'
description: '$guildSystemChannelID wird die ID des Systemkanals der Gilde zurückgeben.'
id: guildSystemChannelID
---

`$guildSystemChannelID` wird die ID des Systemkanals der Gilde zurückgeben.

## Verwendung

```php
$guildSystemChannelID[guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung   | Erforderlich |
| -------- | ---------- | -------------- |:------------:|
| guildID? | ganze Zahl | Die Gilden-ID. |    falsch    |

## Beispiel(e)

Dies gibt die Systemkanal-ID der Gilde zurück:

```javascript
bot.command({
    name: 'guildSystemChannelID',
    code: `
  $guildSystemChannelID[$guildID]
  `
});
```
