---
title: '$arrayShuffle'
description: '$arrayShuffle wird die Elemente des angegebenen Arrays mischen.'
id: arrayShuffle
---

`$arrayShuffle` wird die Elemente des angegebenen Arrays mischen.

## Verwendung

```php
$arrayShuffle[name]
```

## Parameter

| Feld | Typ    | Beschreibung | Erforderlich |
| ---- | ------ | ------------ |:------------:|
| name | string | Array-Name.  |     wahr     |

## Beispiel(e)

```javascript
bot.command({
    name: "array-shuffle",
    code: `
  $arrayJoin[array;, ]
  $arrayShuffle[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```