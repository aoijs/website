---
title: '$arrayIndexOf'
description: '$arrayIndexOf gibt den Index des ersten gefundenen Elements der Abfrage zurück.'
id: arrayIndexOf
---

`$arrayIndexOf` gibt den Index des ersten gefundenen Elements der Abfrage zurück.

## Verwendung

```php
$arrayIndexOf[name;query]
```

## Parameter

| Feld    | Typ    | Beschreibung                                                            | Erforderlich |
| ------- | ------ | ----------------------------------------------------------------------- |:------------:|
| name    | string | Array-Name.                                                             |     wahr     |
| abfrage | string | Das Element, das wir für jedes Element innerhalb des Arrays ausrichten. |     wahr     |

## Beispiel(e)

```javascript
bot.command({
    Name: "array-indexof",
    Code: `
  $arrayIndexOf[array;akarui]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
    // Er gibt "2" zurück, da sich das Wort "akarui" in der 2. Position des Arrays befindet.
});
```