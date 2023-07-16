---
title: $guildSplash
description: '$guildSplash wird den Einladungshintergrund einer Gilde zurückgeben (wenn freigeschaltet).'
id: guildSplash
---

`$guildSplash` wird den Einladungshintergrund einer Gilde zurückgeben (wenn freigeschaltet).

## Verwendung

```php
$guildSplash[guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung      | Erforderlich |
| -------- | ---------- | ----------------- |:------------:|
| guildID? | ganze Zahl | Die ID der Gilde. |    falsch    |

## Beispiel(e)

Dies gibt den Einladungshintergrund der Gilde zurück (wenn freigeschaltet):

```javascript
bot.command({
    name: 'guildSplash',
    code: `
  $guildSplash[$guildID]
  `
});
```
