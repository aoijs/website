---
title: '$arrayEvery'
description: '$arrayEvery va a revisar si es que todos los elementos en el array cumplen con la condición indicada.'
id: arrayEvery
---

`$arrayEvery` va a revisar si es que todos los elementos en el array cumplen con la condición indicada.

## Uso

```php
$arrayEvery[nombre;consulta;Tipo de consulta?]
```

## Parámetros

| Campos           | Tipo   | Descripción                                                        | Requerido |
| ---------------- | ------ | ------------------------------------------------------------------ |:---------:|
| nombre           | cadena | Nombre del array.                                                  | verdadera |
| consulta         | cadena | El elemento que vamos a revisar dentro de cada elemento del array. | verdadera |
| tipo de consulta | cadena | El operador de comparación.                                        |   falso   |

## Operadores de comparación

* `includes` — Incluye
* `startsWith` — Comienza con
* `endsWith` — Termina en
* `==` — Es igual a
* `!=` — Es diferente a
* `>` — Mayor que
* `<` — Menor que
* `>=` — Mayor o igual que
* `<=` — Menor o igual que

## Ejemplo(s)

```javascript
bot.command({
    name: "array-every",
    code: `
  $arrayEvery[array;30;==]
  $createArray[array;1;2;3;0;30]
  `
    // Va a entregar "false". Porque 1 no es igual a 30. Puedes pensar que es el operador lógico de condiciones "y (&&)".
});
```
