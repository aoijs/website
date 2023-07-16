---
title: '$arrayReverse'
description: '$arrayReverse wird die Elemente im angegebenen Array umkehren.'
id: arrayReverse
---

`$arrayReverse` wird die Elemente im angegebenen Array umkehren.

## Verwendung

```php
$arrayReverse[name]
```

## Parameter

| Feld | Typ    | Beschreibung | Erforderlich |
| ---- | ------ | ------------ |:------------:|
| name | string | Array-Name.  |     wahr     |

## Beispiel(e)

```javascript
bot.command({
    name: "array-reverse",
    code: `
  $arrayReverse[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```