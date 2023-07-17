---
title: '$toLowerCase'
description: '$toLowerCase cambiará el texto dado de mayúsculas a minúsculas.'
id: toLowerCase
---

`$toLowerCase` cambiará el texto dado de mayúsculas a minúsculas.

## Uso

```php
$toLowerCase[text]
```

## Parámetros

| Campo | Tipo   | Parámetros                       | Requerido |
| ----- | ------ | -------------------------------- |:---------:|
| text  | string | El texto a cambiar a minúsculas. | verdadera |

## Ejemplo(s)

Esto hará todo lo dado a minúsculas, en este caso devolvería `aoi.js es genial.`:

```javascript
bot.command({
    name: "toLowerCase",
    code: `
    $toLowerCase[AOI.JS IS GREAT.]
    `
});
```