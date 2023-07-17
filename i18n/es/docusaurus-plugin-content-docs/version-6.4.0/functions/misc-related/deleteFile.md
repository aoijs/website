---
title: '$deleteFile'
description: '$deleteFile eliminará un archivo dado.'
id: deleteFile
---

`$deleteFile` eliminará un archivo dado.

## Uso

```php
$deleteFile[camino]
```

## Parámetros

| Campo  | Tipo   | Parámetros       | Requerido |
| ------ | ------ | ---------------- |:---------:|
| camino | string | Ruta del archivo | verdadera |

## Ejemplo(s)

Esto eliminará su `index.js` (no haga eso):

```javascript
bot.command({
    name: "deleteFile",
    code: `
  $deleteFile[./index.js]
  `
});
```