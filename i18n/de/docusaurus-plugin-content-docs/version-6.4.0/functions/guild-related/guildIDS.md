---
title: '$guildIDS'
description: '$guildIDS gibt die ID jeder Gilde zurück, in der ihr Bot sitzt.'
id: guildIDS
---

`$guildIDS` wird die ID jeder Gilde zurückgeben, in der sich dein Bot befindet.

## Verwendung

```php
$guildIDS[sep?]
```

## Verwendung

| Feld | Typ    | Beschreibung                                                  | Erforderlich |
| ---- | ------ | ------------------------------------------------------------- |:------------:|
| sep? | string | Das Trennzeichen, um mehrere zurückgegebene Werte zu trennen. |    falsch    |

## Beispiel(e)

Dies gibt alle Gilden-IDs zurück, die dein Bot ist:

```javascript
bot.command({
    name: 'guildIDS',
    code: `
  $guildIDS[, ]
  `
});
```
