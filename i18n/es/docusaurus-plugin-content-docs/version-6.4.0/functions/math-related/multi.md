---
title: '$multi'
description: '$multi operación / multiplicación.'
id: multi
---

`$multi` operación / multiplicación.

## Uso

```php
$multi[núm;núm]
```

## Parámetros

| Campo | Tipo   | Parámetros                       | Requerido |
| ----- | ------ | -------------------------------- |:---------:|
| núm   | número | Números que quieres multiplicar. | verdadera |

## Ejemplo(s)

Esto devolverá `72` ya que `8*9` es igual a eso:

```javascript
bot.command({
    name: 'multi',
    code: `
  $multi[8;9]
  `
});
```
