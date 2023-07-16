---
title: '$guildNSFWLevel'
description: '$guildNSFWLevel wird das NSFW-Level der Gilde zurückgeben.'
id: guildNSFWLevel
---

`$guildNSFWLevel` wird das NSFW-Level der Gilde zurückgeben.

## Verwendung

```php
$guildNSFWLevel[guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung      | Erforderlich |
| -------- | ---------- | ----------------- |:------------:|
| guildID? | ganze Zahl | Die ID der Gilde. |     wahr     |

## Beispiel(e)

Dies wird das NSFW-Level der Gilde zurückgeben:

```javascript
bot.command({
    name: 'guildNSFWLevel',
    code: `
  $guildNSFWLevel[$guildID]
  `
});
```
