---
title: $arrayPop
description: '$arrayPop devolverá el último elemento de la matriz dada.'
id: arrayPop
---

`$arrayPop`  devolverá el último elemento de la matriz dada.

## Uso

```php
$arrayPop[nombre]
```

## Parámetros

| Campo  | Tipo   | Descripcion      | Requerido |
| ------ | ------ | ---------------- |:---------:|
| nombre | cadena | Nombre de matriz | verdadero |

## Ejemplo(s)

```javascript
bot.command({
    name: "array-pop",
    code: `
  $arrayPop[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```