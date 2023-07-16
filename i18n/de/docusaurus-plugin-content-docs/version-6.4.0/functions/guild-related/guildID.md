---
title: '$guildID'
description: '$guildID wird die Gilden-ID einer bestimmten Gilde zurückgeben.'
id: guildID
---

`$guildID` wird die Gilden-ID einer bestimmten Gilde zurückgeben.

## Verwendung

```php
$guildID[name?]
```

## Verwendung

| Feld  | Typ    | Beschreibung                                              | Erforderlich |
| ----- | ------ | --------------------------------------------------------- |:------------:|
| name? | string | Der Gildenname, von dem die ID zurückgegeben werden soll. |    falsch    |

## Beispiel(e)

Dies wird deine Gilden-ID zurückgeben:

```javascript
bot.command({
    name: 'guildID',
    code: `
  $guildID
  `
});
```
