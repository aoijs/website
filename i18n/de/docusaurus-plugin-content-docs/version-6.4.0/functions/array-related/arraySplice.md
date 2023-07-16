---
title: '$arraySplice'
description: '$arraySplice splicce Elemente aus dem Array.'
id: arraySplice
---

`$arraySplice` splicce Elemente aus dem Array.

## Verwendung

```php
$arraySplice[name;index;amount;...elements]
```

## Parameter

| Feld        | Typ    | Beschreibung          | Erforderlich |
| ----------- | ------ | --------------------- |:------------:|
| name        | string | Array-Name.           |     wahr     |
| index       | anzahl | Index des Elements.   |     wahr     |
| beträge     | anzahl | Anzahl der zu splice. |     wahr     |
| ...elemente | string | Elemente zum Splice.  |     wahr     |

## Beispiel(e)

```javascript
bot.command({
    name: "array-splice",
    code: `
  $arraySplice[array;2;3]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```