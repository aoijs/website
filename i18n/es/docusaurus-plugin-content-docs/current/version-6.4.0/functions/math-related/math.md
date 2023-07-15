---
title: '$math'
description: '$math will return a calculated result of the given argument.'
id: math
---

`$math` will return a calculated result of the given argument.

## Modo de uso

```php
$math[equation]
```

## Parámetros

| Campo    | Tipo   |      Parámetros      | Requerido |
| -------- | ------ |:--------------------:|:---------:|
| equation | string | Calculation (/*-+()) | verdadera |

## Ejemplo(s)

This will return `205` as `15+5/2*26+(5+120)` equals it:

```javascript
bot.command({
    name: 'math',
    code: `
  $math[15+5/2*26+(5+120)]
  `
});
```
