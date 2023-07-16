---
title: '$arraySome'
description: '$arraySome wird auf die angegebenen Elemente im Array überprüfen.'
id: arraySome
---

`$arraySome` prüft auf die angegebenen Elemente im Array und gibt Boolean zurück.

## Verwendung

```php
$arraySome[name;query;queryType?]
```

## Parameter

| Feld       | Typ    | Beschreibung                                                            | Erforderlich |
| ---------- | ------ | ----------------------------------------------------------------------- |:------------:|
| Name       | string | Array-Name.                                                             |     wahr     |
| abfrage    | string | Das Element, das wir für jedes Element innerhalb des Arrays ausrichten. |     wahr     |
| queryType? | string | Der Vergleichsoperator.                                                 |    falsch    |

* `==` — Jedes Element, das mit der Anfrage übereinstimmt.
* `!=` — Jeder Gegenstand, der nicht mit der Abfrage übereinstimmt.
* `>`  — Alle Elemente auf der "linken" des gefundenen Elements, ausgenommen sich selbst.
* `<`  — Alle Elemente auf der "rechts" des gefundenen Elements, ausgenommen sich selbst.
* `>=` — Alle Elemente auf der "linken" des gefundenen Elements, einschließlich sich selbst.
* `<=` — Alle Elemente auf der "rechts" des gefundenen Elements, einschließlich sich selbst.

## Beispiel(e)

```javascript
bot.command({
    name: "array-some",
    code: `
  $arraySome[array;aoi.js;==]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```