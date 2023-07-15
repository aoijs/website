---
title: '$arrayUnshift'
description: '$arrayUnshift devolverá la cantidad de elementos de la matriz dada.'
id: arrayUnshift
---

`$arrayUnshift` devolverá la cantidad de elementos de la matriz dada.

## Uso

```php
$arrayUnshift[nombre]
```

## Parámetros

| Campo  | Tipo   | Descripción      | Requerido |
| ------ | ------ | ---------------- |:---------:|
| nombre | cadena | Nombre de matriz | verdadero |

## Ejemplo(s)

```javascript
bot.command({
    name: "array-unshift",
    code: `
  $arrayUnshift[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```