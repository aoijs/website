---
title: '$toLocaleUpperCase'
description: '$toLocaleUpperCase cambiará el primer carácter de cada palabra a mayúsculas.'
id: toLocaleUpperCase
---

`$toLocaleUpperCase` cambiará el primer carácter de cada palabra a mayúsculas.

## Uso

```php
$toLocaleUpperCase[text]
```

## Parámetros

| Campo | Tipo   | Parámetros                                       | Requerido |
| ----- | ------ | ------------------------------------------------ |:---------:|
| text  | string | El texto a cambiar a mayúsculas de localización. | verdadera |

## Ejemplo(s)

Esto cambiará cada primer carácter de una palabra a mayúsculas, en este caso devolvería `Hola, soy Feliz.`:

```javascript
bot.command({
    nombre: "toLocaleUpperCase",
    código: `
    $toLocaleUpperCase[hello, i'm happy.]
    `
});
```