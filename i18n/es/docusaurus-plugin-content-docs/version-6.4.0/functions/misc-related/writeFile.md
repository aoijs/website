---
title: '$writeFile'
description: '$writeFile will create a new file in the bot''s directory.'
id: writeFile
---

`$writeFile` will create a new file in the bot's directory.

## Uso

```php
$writeFile[path;text;encoding?]
```

## Parámetros

| Campo    | Tipo     | Parámetros                              | Requerido |
| -------- | -------- | --------------------------------------- |:---------:|
| path     | consulta | Where to create the file.               | verdadero |
| text     | consulta | What the content of the file should be. | verdadero |
| encoding | string   | Text/File encoding.                     |   falso   |

## Ejemplo(s)

This will a file called "testing.txt" with the content of "Hello!":

```javascript
bot.command({
    name: "writeFile",
    code: `
    $writeFile[./testing.txt;Hello!;utf8]
    `
});
```