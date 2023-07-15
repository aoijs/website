---
title: '$deleteArray'
description: '$deleteArray eliminará una matriz creada previamente.'
id: deleteArray
---

`$deleteArray` eliminará una matriz creada previamente.

## Uso

```php
$deleteArray[nombre]
```

## Parámetros

| Campo  | Tipo   | Descripción      | Requerido |
| ------ | ------ | ---------------- |:---------:|
| nombre | cadena | Nombre de matriz | verdadero |

## Ejemplo(s)

Esto eliminará la matriz "array":

```javascript
bot.command({
    name: "deleteArray",
    code: `
  $deleteArray[array]
  $createArray[array;Hello;This;Is;Great]
  `
});
```