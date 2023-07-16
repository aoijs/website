---
title: '$sum'
description: '$sum sumará dos números dados.'
id: sum
---

`$sum` sumará dos números dados.

## Uso

```php
$sum[núm;núm]
```

## Parámetros

| Campo | Tipo   | Parámetros                               | Requerido |
| ----- | ------ | ---------------------------------------- |:---------:|
| núm   | número | Números con los que realizar el cálculo. | verdadera |

## Ejemplo(s)

Esto devolverá `75` ya que `70+5` es igual a `75`:

```javascript
bot.command({
    name: 'sum',
    code: `
  $sum[70;5]
  `
});
```