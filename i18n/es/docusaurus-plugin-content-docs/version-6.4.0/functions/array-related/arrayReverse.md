---
title: '$arrayReverse'
description: '$arrayReverse invertirá los elementos en la matriz dada.'
id: arrayReverse
---

`$arrayReverse` invertirá los elementos en la matriz dada.

## Uso

```php
$arrayReverse[nombre]
```

## Parámetros

| Campo  | Tipo   | Descripción      | Requerido |
| ------ | ------ | ---------------- |:---------:|
| nombre | cadena | Nombre de matriz | verdadero |

## Ejemplo(s)

```javascript
bot.command({
    name: "array-reverse",
    code: `
  $arrayReverse[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```