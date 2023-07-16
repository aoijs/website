---
title: '$arrayShift'
description: '$arrayShift wird das erste Element des angegebenen Arrays zurückgeben.'
id: arrayShift
---

`$arrayShift` wird das erste Element des angegebenen Arrays zurückgeben.

## Verwendung

```php
$arrayShift[name]
```

## Parameter

| Feld | Typ    | Beschreibung | Erforderlich |
| ---- | ------ | ------------ |:------------:|
| name | string | Array-Name.  |     wahr     |

## Beispiel(e)

```javascript
bot.command({
    name: "array-shift",
    code: `
  $arrayShift[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```