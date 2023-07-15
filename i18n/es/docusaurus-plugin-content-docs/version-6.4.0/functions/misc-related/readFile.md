---
title: '$readFile'
description: '$readFile will read a file''s content and return it.'
id: readFile
---

`$readFile` will read a file's content and return it.

## Modo de uso

```php
$readFile[path]
```

## Parámetros

| Campo | Tipo   | Parámetros | Requerido |
| ----- | ------ | ---------- |:---------:|
| path  | string | File path. | verdadera |

## Ejemplo(s)

This will return your main file (index.js):

```javascript
bot.command({
    name: "readFile",
    code: `
    $readFile[./index.js]
    `
});
```