---
title: '$arrayIncludes'
description: '$arrayIncludes wird prüfen, ob ein bestimmtes Element im Array existiert.'
id: arrayIncludes
---

`$arrayIncludes` wird überprüfen, ob ein bestimmtes Element im Array existiert.

## Verwendung

```php
$arrayIncludes[name;query]
```

## Parameter

| Feld    | Typ    | Beschreibung                                                            | Erforderlich |
| ------- | ------ | ----------------------------------------------------------------------- |:------------:|
| name    | string | Array-Name.                                                             |     wahr     |
| abfrage | string | Das Element, das wir für jedes Element innerhalb des Arrays ausrichten. |     wahr     |

## Beispiel(e)

```javascript
bot.command({
    Name: "array-includes",
    Code: `
  $arrayIncludes[array;Leref]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
    // Er gibt "false" zurück, da er nicht das Wort "Leref" enthält.
});
```

```javascript
bot.command({
    name: "array-includes",
    code: `
  $arrayIncludes[array;akarui]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
    // Es wird "true" zurückgeben, da es das Wort "akarui" enthält.
});
```