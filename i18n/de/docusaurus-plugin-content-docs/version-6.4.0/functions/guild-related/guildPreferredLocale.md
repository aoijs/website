---
title: '$guildPreferredLocale'
description: '$guildPreferredLocale wird ein Gildenset Locale zurückgeben.'
id: guildPreferredLocale
---

`$guildPreferredLocale` wird eine Gilde Locale zurückgeben.

## Verwendung

```php
$guildPreferredLocale[guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung      | Erforderlich |
| -------- | ---------- | ----------------- |:------------:|
| guildID? | ganze Zahl | Die ID der Gilde. |    falsch    |

## Beispiel(e)

Dadurch wird der bevorzugte Ort der Gilde zurückgegeben:

```javascript
bot.command({
    name: 'guildPreferredLocale',
    code: `
  $guildPreferredLocale[$guildID]
  `
});
```
