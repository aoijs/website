---
title: '$guildAFKChannelID'
description: '$guildAFKChannelID wird den AFK-Sprachkanal einer Gilde zurückgeben.'
id: guildAFKChannelID
---

`$guildAFKChannelID` wird den AFK-Sprachkanal einer Gilde zurückgeben

## Verwendung

```php
$guildAFKChannelID[guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung      | Erforderlich |
| -------- | ---------- | ----------------- |:------------:|
| guildID? | ganze Zahl | Die ID der Gilde. |     wahr     |

## Beispiel(e)

Dies gibt den AFK-Sprachkanal deiner Gilde zurück:

```javascript
bot.command({
    Name: 'guildAFKChannelID',
    Code: `
  $guildAFKChannelID
  `
});
```
