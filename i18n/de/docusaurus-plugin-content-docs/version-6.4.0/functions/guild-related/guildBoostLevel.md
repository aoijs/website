---
title: '$guildBoostLevel'
description: '$guildBoostLevel wird den Boost der Gilde zurückgeben.'
id: guildBoostLevel
---

`$guildBoostLevel` wird die Gilde Boost Level zurückgeben.

## Verwendung

```php
$guildBoostLevel[guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung      | Erforderlich |
| -------- | ---------- | ----------------- |:------------:|
| guildID? | ganze Zahl | Die ID der Gilde. |    falsch    |

## Beispiel(e)

Dies wird das Boost Level einer bestimmten Gilde zurückgeben:

```javascript
bot.command({
    name: 'guildBoostLevel',
    code: `
  $guildBoostLevel[$guildID]
  `
});
```
