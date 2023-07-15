---
title: '$modulo'
description: '$modulo operación / el resto al dividir.'
id: modulo
---

`$modulo` operación / el resto al dividir.

## Modo de uso

```php
$modulo[núm;núm]
```

## Parámetros

| Campo | Tipo   | Parámetros                         | Requerido |
| ----- | ------ | ---------------------------------- |:---------:|
| núm   | número | Números para devolver el resto de. | verdadera |

## Ejemplo(s)

Esto devolverá `2` ya que es el resto de `5 % 3`:

```javascript
bot.command({
    name: 'modulo',
    code: `
  $modulo[5;3]
  `
});
```
