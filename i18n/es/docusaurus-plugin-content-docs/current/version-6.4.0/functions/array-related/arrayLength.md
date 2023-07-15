---
title: '$arrayLength'
description: '$arrayLength devolverá la longitud de una matriz dada.'
id: arrayLength
---

`$arrayLength` devolverá la longitud de una matriz dada.

## Uso

```php
$arrayLength[nombre]
```

## Parámetros

| Campo  | Tipo   | Descripción      | Requerido |
| ------ | ------ | ---------------- |:---------:|
| nombre | cadena | Nombre de matriz | verdadero |

## Ejemplo(s)

```javascript
bot.command({
    name: "array-length",
    code: `
  $arrayLength[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```