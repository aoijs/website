---
title: '$arrayFind'
description: '$arrayFind buscará el primer elemento en la matriz que coincida con la consulta y lo devolverá.'
id: arrayFind
---

`$arrayFind` buscará el primer elemento en la matriz que coincida con la consulta y lo devolverá.

## Uso

```php
$arrayFind[nombre;consulta;tipo de consulta?;separador?]
```

## Parámetros

| Campo             | Tipo   | Descripción                                                                   | Requerido |
| ----------------- | ------ | ----------------------------------------------------------------------------- |:---------:|
| nombre            | cadena | Nombre de matriz                                                              | verdadero |
| consulta          | cadena | El elemento que estaremos consultando para cada elemento dentro de la matriz. | verdadero |
| tipo de consulta? | cadena | El operador de comparación.                                                   |   falso   |
| separador?        | cadena | Separador.                                                                    |   falso   |

## Operadores de comparación

* `==` — Cada elemento que coincida con la consulta.
* != — Cada elemento que no coincide con la consulta.
* > — Todos los elementos a la "izquierda" del elemento encontrado, excepto él mismo.
* < — Todos los elementos a la "derecha" del elemento encontrado, excepto él mismo.
* >= — Todos los elementos a la "izquierda" del elemento encontrado, incluido él mismo.
* <= — Todos los elementos a la "derecha" del elemento encontrado, incluido él mismo.

## Ejemplo(s)

```javascript
bot.command({
    name: "array-find",
    code: `
  $arrayFind[array;akarui;==;, ]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
// Devolverá "akarui" ya que coincide con la consulta.

});
```