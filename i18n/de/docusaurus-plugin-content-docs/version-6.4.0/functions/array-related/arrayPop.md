---
title: '$arrayPop'
description: '$arrayPop wird das letzte Element des angegebenen Arrays zurückgeben.'
id: arrayPop
---

`$arrayPop` wird das letzte Element des angegebenen Arrays zurückgeben.

## Verwendung

```php
$arrayPop[name]
```

## Parameter

| Feld | Typ    | Beschreibung | Erforderlich |
| ---- | ------ | ------------ |:------------:|
| name | string | Array-Name.  |     wahr     |

## Beispiel(e)

```javascript
bot.command({
    name: "array-pop",
    code: `
  $arrayPop[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```