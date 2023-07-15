---
title: '$createArray'
description: '$createArray creará una nueva matriz con elementos dados.'
id: createArray
---

`$createArray` creará una nueva matriz con elementos dados.

## Uso

```php
$createArray[nombre;...elementos]
```

## Parámetros

| Campo        | Tipo   | Descripción          | Requerido |
| ------------ | ------ | -------------------- |:---------:|
| nombre       | cadena | Nombre de matriz     | verdadero |
| ...elementos | cadena | Elementos a agregar. | verdadero |

## Ejemplo(s)

```javascript
bot.command({
    name: "array-create",
    code: `
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```