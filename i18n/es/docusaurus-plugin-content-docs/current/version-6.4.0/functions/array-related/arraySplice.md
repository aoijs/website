---
title: '$arraySplice'
description: '$arraySplice empalmará elementos de la matriz.'
id: arraySplice
---

`$arraySplice` empalmará elementos de la matriz.

## Uso

```php
$arraySplice[nombre;índice;cantidad;...elementos]
```

## Parámetros

| Campo        | Tipo   | Descripción           | Requerido |
| ------------ | ------ | --------------------- |:---------:|
| nombre       | cadena | Nombre de matriz      | verdadero |
| índice       | número | Índice del elemento.  | verdadero |
| cantidad     | número | Cantidad a empalmar.  | verdadero |
| ...elementos | cadena | Elementos a empalmar. | verdadero |

## Ejemplo(s)

```javascript
bot.command({
    name: "array-splice",
    code: `
  $arraySplice[array;2;3]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```