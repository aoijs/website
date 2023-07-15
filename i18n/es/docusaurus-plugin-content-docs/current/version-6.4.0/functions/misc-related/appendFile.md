---
title: '$appendFile'
description: '$appendFile will add given text to a specific file.'
id: appendFile
---

`$appendFile` will add given text to a specific file.

## Modo de uso

```php
$appendFile[path;content;encode?]
```

## Parámetros

| Campo     | Tipo           | Parámetros                                     | Requerido |
| --------- | -------------- | ---------------------------------------------- |:---------:|
| path      | consulta       | File location.                                 | verdadero |
| contenido | cadena, número | Content to append to the file                  | verdadero |
| encode?   | string         | Encode type <br /> 1. **utf8** (default) |   falso   |

## Ejemplo(s)

This will add a comment to your main file:

```javascript
bot.command({
    name: 'appendFile',
    code: `
  $appendFile[./index.js;// Hello!]
  `
});
```