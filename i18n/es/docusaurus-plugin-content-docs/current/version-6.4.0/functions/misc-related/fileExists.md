---
title: '$fileExists'
description: '$fileExists will check if a given file exists.'
id: fileExists
---

`$fileExists` will check if a given file exists.

## Modo de uso

```php
$fileExists[path]
```

## Parámetros

| Campo | Tipo   | Parámetros | Requerido |
| ----- | ------ | ---------- |:---------:|
| path  | string | File path. | verdadera |

## Ejemplo(s)

This will check if a file called `index.js` exists in your directory:

```javascript
bot.command({
    name: "fileExists",
    code: `
  $fileExists[./index.js]
  `
});
```