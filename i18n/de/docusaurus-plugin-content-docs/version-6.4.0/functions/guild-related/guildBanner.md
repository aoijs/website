---
title: '$guildBanner'
description: '$guildBanner wird das Banner einer Gilde zurückgeben.'
id: guildBanner
---

`$guildBanner` wird das Banner einer Gilde zurückgeben.

## Verwendung

```php
$guildBanner[guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung      | Erforderlich |
| -------- | ---------- | ----------------- |:------------:|
| guildID? | ganze Zahl | Die ID der Gilde. |    falsch    |

## Beispiel(e)

Dies gibt deinen Gilden-Banner zurück (wenn entsperrt und verwendet):

```javascript
bot.command({
    name: 'guildBanner',
    code: `
  $guildBanner[$guildID]
  `
});
```
