---
title: '$arraySort'
description: '$arraySort wird ein bestimmtes Array sortieren.'
id: arraySort
---

`$arraySort` sortiert ein Array.

## Verwendung

```php
$arraySort[name;type?]
```

## Parameter

| Feld | Typ    | Beschreibung                                                                 | Erforderlich |
| ---- | ------ | ---------------------------------------------------------------------------- |:------------:|
| name | string | Array-Name.                                                                  |     wahr     |
| typ  | string | Sortieren nach <br /> 1. **asc** (aufsteigend) 2. **dsc** (absteigend) |     wahr     |

## Beispiel(e)

```javascript
bot.command({
    name: "array-sort",
    code: `
  $arrayJoin[array;, ]
  $arraySort[array;asc]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```