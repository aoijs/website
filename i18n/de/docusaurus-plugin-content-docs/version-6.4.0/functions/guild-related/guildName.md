---
title: '$guildName'
description: '$guildName wird den Namen einer Gilde zurückgeben.'
id: guildName
---

`$guildName` wird den Namen einer Gilde zurückgeben.

## Verwendung

```php
$guildName[guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung      | Erforderlich |
| -------- | ---------- | ----------------- |:------------:|
| guildID? | ganze Zahl | Die ID der Gilde. |    falsch    |

## Beispiel(e)

Dies gibt den Namen deiner Gilde zurück:

```javascript
bot.command({
    name: 'guildName',
    code: `
  $guildName[$guildID]
  `
});
```
