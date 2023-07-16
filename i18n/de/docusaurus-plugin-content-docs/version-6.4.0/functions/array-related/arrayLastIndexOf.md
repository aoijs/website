---
title: '$arrayLastIndexOf'
description: '$arrayLastIndexOf gibt den Index des zuletzt gefundenen Elements der Abfrage zurück.'
id: arrayLastIndexOf
---

`$arrayLastIndexOf` gibt den Index des zuletzt gefundenen Elements der Abfrage zurück.

## Verwendung

```php
$arrayLastIndexOf[name;query]
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
  $arrayLastIndexOf[array;akarui]
  $createArray[array;aoi.js;akarui;akarui;documents;bot]
  `
    // Er gibt "3" zurück, da sich das Wort "akarui" in der 3. Position des Arrays befindet.
});
```