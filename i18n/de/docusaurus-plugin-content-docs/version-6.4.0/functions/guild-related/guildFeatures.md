---
title: $guildFeatures
description: '$guildFeatures wird freigeschaltete Gildenfunktionen zurückgeben.'
id: guildFeatures
---

`$guildFeatures` wird freigeschaltete Gildenfunktionen zurückgeben.

## Verwendung

```php
$guildFeatures[guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung      | Erforderlich |
| -------- | ---------- | ----------------- |:------------:|
| guildID? | ganze Zahl | Die ID der Gilde. |    falsch    |

## Beispiel(e)

Dadurch werden die Funktionen einer Gilde freigeschaltet:

```javascript
bot.command({
    name: 'guildFeatures',
    code: `
  $guildFeatures[$guildID;true]
  `
});
```
