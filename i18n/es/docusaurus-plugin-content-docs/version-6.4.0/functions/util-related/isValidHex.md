---
title: '$isValidHex'
description: '$isValidHex comprobará si el color hexadecimal / decimal dado es válido.'
id: isValidHex
---

`$isValidHex` comprobará si el color hexadecimal / decimal dado es válido.

## Uso

```php
$isValidHex[colorResolver]
```

## Parámetros

| Campo                 | Tipo            | Parámetros                             | Requerido |
| --------------------- | --------------- | -------------------------------------- |:---------:|
| resolución de colores | string, integer | Cadena de color hexadecimal / decimal. | verdadera |

## Ejemplo(s)

Esto devolverá `verdadero` como `#30dbd8` es un color hexadecimal válido:

```javascript
bot.command({
    name: 'isValidHex',
    code: `
  $isValidHex[#30dbd8]
  `
});
```

Esto devolverá `verdadero` así como `80` es un color hexadecimal válido:

```javascript
bot.command({
    name: 'isValidHex',
    code: `
  $isValidHex[80]
  `
});
```
