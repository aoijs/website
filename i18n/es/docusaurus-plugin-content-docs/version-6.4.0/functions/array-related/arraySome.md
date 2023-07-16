---
title: $arraySome
description: '$arraySome verificará los elementos dados en la matriz.'
id: arraySome
---

`$arraySome`  verificará los elementos dados en la matriz y devolverá un valor booleano.

## Uso

```php
$arraySome[nombre;consulta;tipo de consulta?]
```

## Parámetros

| Campo             | Tipo     | descripción                                                                   | Requerido |
| ----------------- | -------- | ----------------------------------------------------------------------------- |:---------:|
| nombre            | consulta | Nombre de matriz                                                              | verdadero |
| consulta          | cadena   | El elemento que estaremos consultando para cada elemento dentro de la matriz. | verdadero |
| tipo de consulta? | cadena   | El operador de comparación.                                                   |   falso   |

* `==` — Cada elemento que coincida con la consulta.
* `!=` — Cada elemento que no coincide con la consulta.
* `>`  — Todos los elementos a la "izquierda" del elemento encontrado, excluyéndose a sí mismo.
* `<`  — Todos los elementos a la "derecha" del elemento encontrado, excluyéndose a sí mismo.
* `>=` — Todos los elementos a la "izquierda" del elemento encontrado, incluido él mismo.
* `<=` — Todos los elementos a la "derecha" del elemento encontrado, incluido él mismo.

## Ejemplo(s)

```javascript
bot.command({
    name: "array-some",
    code: `
  $arraySome[array;aoi.js;==]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```