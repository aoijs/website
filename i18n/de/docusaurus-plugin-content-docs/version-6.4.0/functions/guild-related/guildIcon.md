---
title: '$guildIcon'
description: '$guildIcon wird das Gildensymbol zurückgeben.'
id: guildIcon
---

`$guildIcon` wird das Gildensymbol zurückgeben.

## Verwendung

```php
$guildIcon[guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung      | Erforderlich |
| -------- | ---------- | ----------------- |:------------:|
| guildID? | ganze Zahl | Die ID der Gilde. |    falsch    |

## Beispiel(e)

Dies gibt das Symbol der Gilde zurück:

```javascript
bot.command({
    name: 'guildIcon',
    code: `
  $guildIcon[$guildID]
  `
});
```
