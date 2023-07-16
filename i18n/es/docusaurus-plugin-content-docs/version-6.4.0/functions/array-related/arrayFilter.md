---
title: '$arrayFilter'
description: '$arrayFilter va a revisar si un elemento del array cumple con la condición y lo regresará.'
id: arrayFilter
---

`$arrayFilter` va a revisar si un elemento del array cumple con la condición y lo regresará.

## Uso

```php
$arrayFilter[nombre;consulta;tipo de consulta?;separador?]
```

## Parametros

| Campo            | Tipo             | Descripción                                                                   | Requerido |
| ---------------- | ---------------- | ----------------------------------------------------------------------------- |:---------:|
| nombre           | cadena           | nombre de matriz                                                              | verdadera |
| consulta         | tipo de consulta | El elemento que estaremos consultando para cada elemento dentro de la matriz. | verdadera |
| tipo de consulta | cadena           | El operador de comparación                                                    |   falso   |
| separador?       | cadena           | Separador                                                                     |   falso   |

## Operadores de comparación

* `==` — Cada elemento que coincida con la consulta.
* != — Cada elemento que no coincide con la consulta.
* > — Todos los elementos a la "izquierda" del elemento encontrado, excepto él mismo.
* < —Todos los elementos a la "derecha" del elemento encontrado, excluyéndose a sí mismo.
* >= — Todos los elementos a la "izquierda" del elemento encontrado, incluido él mismo.
* <= — Todos los elementos a la "derecha" del elemento encontrado, incluido él mismo.

## Ejemplo(s)

```javascript
bot.command({
    name: "array-filter",
    code: `
  $arrayFilter[array;akarui;==;, ]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
// Devolverá "akarui" ya que coincide con la consulta.
});
```

```javascript
bot.command({
    name: "array-filter",
    code: `
  $arrayFilter[array;akarui;<=;, ]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
// Devolverá "documents, bot" ya que está a la derecha del elemento encontrado.

});
```