---
title: '$guildBoostCount'
description: '$guildBoostCount wird die Belohnung der Gilde zurückgeben.'
id: guildBoostCount
---

`$guildBoostCount` wird die Anzahl der Gilden zurückgeben.

## Verwendung

```php
$guildBoostCount[guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung      | Erforderlich |
| -------- | ---------- | ----------------- |:------------:|
| guildID? | ganze Zahl | Die ID der Gilde. |    falsch    |

## Beispiel(e)

Dies gibt die Anzahl der Boosts einer bestimmten Gilde zurück:

```javascript
bot.command({
    name: 'guildBoostCount',
    code: `
  $guildBoostCount[$guildID]
  `
});
```
