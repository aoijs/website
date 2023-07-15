---
title: '$arrayShuffle'
description: '$arrayShuffle barajará los elementos de la matriz dada.'
id: arrayShuffle
---

$arrayShuffle barajará los elementos de la matriz dada.

## Uso

```php
$arrayShuffle[nombre]
```

## Parámetros

| Campo  | Tipo   | Descripción      | Requerido |
| ------ | ------ | ---------------- |:---------:|
| nombre | cadena | Nombre de matriz | verdadero |

## Ejemplo(s)

```javascript
bot.command({
    name: "array-shuffle",
    code: `
  $arrayJoin[array;, ]
  $arrayShuffle[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```