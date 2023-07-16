---
title: '$toUpperCase'
description: '$toUpperCase cambiará el texto de minúsculas a mayúsculas.'
id: toUpperCase
---

`$toUpperCase` cambiará el texto dado de minúsculas a mayúsculas.

## Uso

```php
$toUpperCase[text]
```

## Parámetros

| Campo | Tipo   | Parámetros                       | Requerido |
| ----- | ------ | -------------------------------- |:---------:|
| text  | string | El texto a cambiar a mayúsculas. | verdadera |

## Ejemplo(s)

Esto hará todo lo dado a mayúsculas, en este caso devolvería `ESTO ES UN EXAMPLE`:

```javascript
bot.command({
    name: "toUpperCase",
    code: `
    $toUpperCase[this is an example]
    `
});
```