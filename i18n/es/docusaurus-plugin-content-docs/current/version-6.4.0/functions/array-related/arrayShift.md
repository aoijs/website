---
title: '$arrayShift'
description: '$arrayShift devolverá el primer elemento de la matriz dada.'
id: arrayShift
---

`$arrayShift` devolverá el primer elemento de la matriz dada.

## Uso

```php
$arrayShift[nombre]
```

## Parámetros

| Campo  | Tipo   | Descripción      | Requerido |
| ------ | ------ | ---------------- |:---------:|
| nombre | cadena | Nombre de matriz | verdadero |

## Ejemplo(s)

```javascript
bot.command({
    name: "array-shift",
    code: `
  $arrayShift[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```