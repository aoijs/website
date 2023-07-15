---
title: '$toUpperCase'
description: '$toUpperCase will change the given text from lowercase to uppercase.'
id: toUpperCase
---

`$toUpperCase` will change the given text from lowercase to uppercase.

## Modo de uso

```php
$toUpperCase[text]
```

## Parámetros

| Campo | Tipo   | Parámetros                       | Requerido |
| ----- | ------ | -------------------------------- |:---------:|
| text  | string | The text to change to uppercase. | verdadera |

## Ejemplo(s)

This will everything given to uppercase, in this case it would return `THIS IS AN EXAMPLE`:

```javascript
bot.command({
    name: "toUpperCase",
    code: `
    $toUpperCase[this is an example]
    `
});
```