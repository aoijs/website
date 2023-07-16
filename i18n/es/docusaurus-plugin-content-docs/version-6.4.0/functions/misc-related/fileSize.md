---
title: '$fileSize'
description: '$fileSize will return the size of a given file.'
id: fileSize
---

`$fileSize` will return the size of a given file.

## Uso

```php
$fileSize[path;unit?]
```

## Parámetros

| Campo | Tipo     | Parámetros                                                                                                                                                                                                                                                                                                               | Requerido |
| ----- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |:---------:|
| path  | consulta | File path.                                                                                                                                                                                                                                                                                                               | verdadero |
| unit? | consulta | In which unit the size will be returned in. <br /> 1. **B** (byte / default) <br /> 2. **KB** (kiloByte) <br />  3. **MB** (megaByte) <br /> 4. **GB** (gigaByte) <br /> 5. **b** (bit) <br /> 6. **kb** (kiloBit) <br /> 7. **mb** (megaBit) <br /> 8. **GB** (gigaBit) |    no     |

## Ejemplo(s)

This will return the size of your `index.js` in `GB`:

```javascript
bot.command({
    name: "fileSize",
    code: `
  $fileSize[./index.js;GB]
  `
});
```