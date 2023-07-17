---
title: '$fileSize'
description: '$fileSize devolverá el estandarte del gremio de un gremio determinado.'
id: fileSize
---

`$fileSize` devolverá el estandarte del gremio de un gremio determinado.

## Uso

```php
$fileSize[camino;unidad?]
```

## Parámetros

| Campo      | Tipo   | Parámetros                                                                                                                                                                                                                                                                                                         | Requerido |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |:---------:|
| camino     | cadena | Ruta del archivo                                                                                                                                                                                                                                                                                                   | verdadero |
| unidad(es) | cadena | En qué unidad se devolverá el tamaño. <br /> 1. **B** (byte / default) <br /> 2. **KB** (kiloByte) <br />  3. **MB** (megaByte) <br /> 4. **GB** (gigaByte) <br /> 5. **b** (bit) <br /> 6. **kb** (kiloBit) <br /> 7. **mb** (megaBit) <br /> 8. **GB** (gigaBit) |   falso   |

## Ejemplo(s)

Esto devolverá el tamaño de su `index.js` en `GB`:

```javascript
bot.command({
    name: "fileSize",
    code: `
  $fileSize[./index.js;GB]
  `
});
```