---
title: '$deleteFile'
description: '$deleteFile will delete a given file.'
id: deleteFile
---

`$deleteFile` will delete a given file.

## Modo de uso

```php
$deleteFile[path]
```

## Parámetros

| Campo | Tipo   | Parámetros | Requerido |
| ----- | ------ | ---------- |:---------:|
| path  | string | File path. | verdadera |

## Ejemplo(s)

This will delete your `index.js` (don't actually do that):

```javascript
bot.command({
    name: "deleteFile",
    code: `
  $deleteFile[./index.js]
  `
});
```