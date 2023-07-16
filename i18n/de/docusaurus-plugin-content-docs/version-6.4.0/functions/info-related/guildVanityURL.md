---
title: '$guildVanityURL'
description: '$guildVanityURL wird die Eitelkeits-URL einer Gilde zurückgeben.'
id: guildVanityURL
---

`$guildVanityURL` wird die Eitelkeit einer Gilde zurückgeben.

## Verwendung

```php
$guildVanityURL[guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung   | Erforderlich |
| -------- | ---------- | -------------- |:------------:|
| guildID? | ganze Zahl | Die Gilden-ID. |    falsch    |

## Beispiel(e)

Dies gibt die Vanity-URL deiner Gilde zurück, falls du eine hast:

```javascript
bot.command({
    name: 'guildVanityURL',
    code: `
  $guildVanityURL[$guildID]
  `
});
```
