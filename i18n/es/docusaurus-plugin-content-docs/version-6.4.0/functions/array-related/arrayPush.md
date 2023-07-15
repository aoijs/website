---
title: '$arrayPush'
description: '$arrayPush agregará elementos dados a la matriz.'
id: arrayPush
---

`$arrayPush` agregará elementos dados a la matriz.

## Uso

```php
$arrayPush[...elementos]
```

## Parámetros

| Campo        | Tipo   | Descripción          | Requerido |
| ------------ | ------ | -------------------- |:---------:|
| ...elementos | cadena | Elementos a agregar. | verdadero |

## Ejemplo(s)

```javascript
bot.command({
    name: "array-push",
    code: `
  $arrayPush[array;Leref;Ayaka;Ferel]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```