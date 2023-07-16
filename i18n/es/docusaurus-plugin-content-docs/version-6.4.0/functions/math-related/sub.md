---
title: '$sub'
description: '$sub restará dos números dados.'
id: sub
---

`$sub` restará dos números dados.

## Uso

```php
$sub[núm;núm]
```

## Parámetros

| Campo | Tipo   | Parámetros                               | Requerido |
| ----- | ------ | ---------------------------------------- |:---------:|
| núm   | número | Números con los que realizar el cálculo. | verdadera |

## Ejemplo(s)

Esto devolverá `65` ya que `70-5` es igual a `65`:

```javascript
bot.command({
    name: 'sub',
    code: `
  $sub[70;5]
  `
});
```