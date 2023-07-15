---
title: '$renameFile'
description: '$renameFile will rename a file of your bot''s directory.'
id: renameFile
---

`$renameFile` will rename a file of your bot's directory.

## Modo de uso

```php
$renameFile[oldFile;newFile]
```

## Parámetros

| Campo   | Tipo     | Parámetros     | Requerido |
| ------- | -------- | -------------- |:---------:|
| oldFile | consulta | Old file name. | verdadero |
| newFile | consulta | New file name. | verdadero |

## Ejemplo(s)

This will change your index.js to a index.txt file:

```javascript
bot.command({
    name: "renameFile",
    code: `
    $renameFile[./index.js;./index.txt]
    `
});
```