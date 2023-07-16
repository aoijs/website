---
title: $guildLowestRole
description: '$guildLowestRole wird die niedrigste Rolle einer bestimmten Gilde zurückgeben.'
id: guildLowestRole
---

`$guildLowestRole` wird die niedrigste Rolle einer bestimmten Gilde zurückgeben.

## Verwendung

```php
$guildLowestRole[guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung      | Erforderlich |
| -------- | ---------- | ----------------- |:------------:|
| guildID? | ganze Zahl | Die ID der Gilde. |    falsch    |

## Beispiel(e)

Dies gibt die ID der niedrigsten Gildenrolle zurück:

```javascript
bot.command({
    name: 'guildLowestRole',
    code: `
  $guildLowestRole[$guildID]
  `
});
```
