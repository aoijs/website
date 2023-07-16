---
title: '$arrayFilter'
description: '$arrayFilter prüft, ob ein Element im Array der Abfrage entspricht und gibt es zurück.'
id: arrayFilter
---

`$arrayFilter` prüft, ob ein Element im Array der Abfrage entspricht und gibt es zurück.

## Verwendung

```php
$arrayFilter[name;query;queryType?;separator?]
```

## Parameter

| Feld          | Typ    | Beschreibung                                                            | Erforderlich |
| ------------- | ------ | ----------------------------------------------------------------------- |:------------:|
| Name          | string | Array-Name.                                                             |     wahr     |
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
    name: "array-filter",
    code: `
  $arrayFilter[array;akarui;==;, ]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
    // Es wird "akarui" zurückgeben, da es mit der Abfrage übereinstimmt.
});
```

```javascript
bot.command({
    Name: "array-filter",
    Code: `
  $arrayFilter[array;akarui;<=;, ]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
    // Er wird "Dokumente" zurückgeben als Bot auf der rechten Seite des gefundenen Elements.
});
```