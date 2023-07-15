---
title: '$arraySort'
description: '$arraySort ordenará una matriz dada.'
id: arraySort
---

`$arraySort` ordenará una matriz dada.

## Uso

```php
$arraySort[nombre;tipo?]
```

## Parámetros

| Campo  | Tipo   | Descripción                                                                                 | Requerido |
| ------ | ------ | ------------------------------------------------------------------------------------------- |:---------:|
| nombre | cadena | Nombre de matriz                                                                            | verdadero |
| tipo   | cadena | Escriba para ordenar después <br /> 1. **asc** (ascendente) 2. **dsc** (descendiendo) | verdadero |

## Ejemplo(s)

```javascript
bot.command({
    name: "array-sort",
    code: `
  $arrayJoin[array;, ]
  $arraySort[array;asc]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```