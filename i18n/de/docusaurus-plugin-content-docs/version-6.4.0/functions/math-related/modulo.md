---
title: '$modulo'
description: '$modulo Operation / der Rest bei der Teilung.'
id: modulo
---

`$modulo` Operation / der Rest beim Teilen.

## Verwendung

```php
$modulo[num;num]
```

## Verwendung

| Feld | Typ    | Beschreibung                                      | Erforderlich |
| ---- | ------ | ------------------------------------------------- |:------------:|
| num  | anzahl | Rufnummern, die den Kaninchen zurückgeben sollen. |     wahr     |

## Beispiel(e)

Dies wird `2` zurückgeben, da es der Rest von `5 % 3` ist:

```javascript
bot.command({
    name: 'modulo',
    code: `
  $modulo[5;3]
  `
});
```
