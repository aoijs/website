---
title: '$arrayIncludes'
description: '$arrayIncludes comprobará si existe un elemento específico en la matriz.'
id: arrayIncludes
---

`$arrayIncludes` verificará si existe un elemento específico en la matriz.

## Uso

```php
$arrayIncludes[nombre;consulta]
```

## Parámetros

| Campo    | Tipo   | Descripción                                                                   | Requerido |
| -------- | ------ | ----------------------------------------------------------------------------- |:---------:|
| nombre   | cadena | Nombre de matriz                                                              | verdadero |
| consulta | cadena | El elemento que estaremos consultando para cada elemento dentro de la matriz. | verdadero |

## Ejemplo(s)

```javascript
bot.command({
    name: "array-includes",
    code: `
  $arrayIncludes[array;Leref]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
// Devolverá "false" ya que no contiene la palabra "Leref".
});
```

```javascript
bot.command({
    name: "array-includes",
    code: `
  $arrayIncludes[array;akarui]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
// Devolverá "true" ya que contiene la palabra "akarui".
});
```