---
title: '$arrayLength'
description: '$arrayLength gibt die Länge eines Arrays zurück.'
id: arrayLength
---

`$arrayLength` gibt die Länge eines Arrays zurück.

## Verwendung

```php
$arrayLength[name]
```

## Parameter

| Feld | Typ    | Beschreibung | Erforderlich |
| ---- | ------ | ------------ |:------------:|
| name | string | Array-Name.  |     wahr     |

## Beispiel(e)

```javascript
bot.command({
    name: "array-length",
    code: `
  $arrayLength[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```