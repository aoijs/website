---
title: '$arrayEvery'
description: '$arrayEvery wird prüfen, ob alle Elemente des Arrays die Bedingung treffen.'
id: arrayEvery
---

`$arrayEvery` wird prüfen, ob alle Elemente im Array die Bedingung treffen.

## Verwendung

```php
$arrayEvery[name;query;queryType?]
```

## Parameter

| Feld       | Typ    | Beschreibung                                                            | Erforderlich |
| ---------- | ------ | ----------------------------------------------------------------------- |:------------:|
| name       | string | Array-Name.                                                             |     wahr     |
| abfrage    | string | Das Element, das wir für jedes Element innerhalb des Arrays ausrichten. |     wahr     |
| abfragetyp | string | Der Vergleichsoperator.                                                 |    falsch    |

## Vergleichsoperatoren

* `enthält` — Inklusive
* `startsWith` — Startet mit
* `endsWith` — Endet mit
* `==` — Gleich zu
* `!=` — Nicht gleich wie
* `>` — Größer als
* `<` — Weniger als
* `>=` — Größer als oder gleich wie
* `<=` — Weniger als oder gleich wie

## Beispiel(e)

```javascript
bot.command({
    name: "array-every",
    code: `
  $arrayEvery[array;30;==]
  $createArray[array;1;2;3;0;30]
  `
    // Er wird "false" zurückgeben. Begründung 1 =<unk> 30. Sie können es als "und (&&)" logischen Operator denken.
});
```
