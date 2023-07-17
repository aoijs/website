---
title: '$arrayFind'
description: '$arrayFind wird auf das erste Element des Arrays überprüfen, das mit der Abfrage übereinstimmt, und es zurückgeben.'
id: arrayFind
---

`$arrayFind` prüft das erste Element im Array, das mit der Abfrage übereinstimmt, und gibt es zurück.

## Verwendung

```php
$arrayFind[name;query;queryType?;separator?]
```

## Parameter

| Feld          | Typ    | Beschreibung                                                            | Erforderlich |
| ------------- | ------ | ----------------------------------------------------------------------- |:------------:|
| name          | string | Array-Name.                                                             |     wahr     |
| abfrage       | string | Das Element, das wir für jedes Element innerhalb des Arrays ausrichten. |     wahr     |
| queryType?    | string | Der Vergleichsoperator.                                                 |    falsch    |
| trennzeichen? | string | Trennzeichen.                                                           |    falsch    |

## Vergleichsoperatoren

* `==` — Jedes Element, das mit der Anfrage übereinstimmt.
* `!=` — Jeder Gegenstand, der nicht mit der Abfrage übereinstimmt.
* `>`  — Alle Elemente auf der "linken" des gefundenen Elements, ausgenommen sich selbst.
* `<`  — Alle Elemente auf der "rechts" des gefundenen Elements, ausgenommen sich selbst.
* `>=` — Alle Elemente auf der "linken" des gefundenen Elements, einschließlich sich selbst.
* `<=` — Alle Elemente auf der "rechts" des gefundenen Elements, einschließlich sich selbst.

## Beispiel(e)

```javascript
bot.command({
    name: "array-find",
    code: `
  $arrayFind[array;akarui;==;, ]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
    // Es wird "akarui" zurückgeben, da es mit der Abfrage übereinstimmt.
});
```