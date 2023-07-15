---
title: '$sum'
description: '$sum will sum-up two given numbers.'
id: sum
---

`$sum` will sum-up two given numbers.

## Modo de uso

```php
$sum[num;num]
```

## Parámetros

| Campo | Tipo   | Parámetros                           | Requerido |
| ----- | ------ | ------------------------------------ |:---------:|
| num   | número | Numbers to perform calculation with. | verdadera |

## Ejemplo(s)

This will return `75` as `70+5` equals `75`:

```javascript
bot.command({
    name: 'sum',
    code: `
  $sum[70;5]
  `
});
```