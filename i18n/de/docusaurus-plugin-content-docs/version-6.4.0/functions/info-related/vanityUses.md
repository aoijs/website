---
title: '$vanityUses'
description: '$vanityUses gibt die Verwendung einer Vanity-URL zurück.'
id: vanityUses
---

`$vanityUses` wird die Verwendung einer Vanity-URL zurückgeben.

## Verwendung

```php
$vanityUses[guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung   | Erforderlich |
| -------- | ---------- | -------------- |:------------:|
| guildID? | ganze Zahl | Die Gilden-ID. |    falsch    |

## Beispiel(e)

Dies wird die Verwendung der Eitelkeits-URL deiner Gilde zurückgeben, falls du eine besitzt:

```javascript
bot.command({
    name: 'vanityUses',
    code: `
  $vanityUses[$guildID]
  `
});
```
