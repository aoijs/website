---
title: '$arrayUnshift'
description: '$arrayUnshift gibt die Anzahl der Elemente des angegebenen Arrays zurück.'
id: arrayUnshift
---

`$arrayUnshift` gibt die Anzahl der Elemente des angegebenen Arrays zurück.

## Verwendung

```php
$arrayUnshift[name]
```

## Parameter

| Feld | Typ    | Beschreibung | Erforderlich |
| ---- | ------ | ------------ |:------------:|
| name | string | Array-Name.  |     wahr     |

## Beispiel(e)

```javascript
bot.command({
    name: "array-unshift",
    code: `
  $arrayUnshift[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```