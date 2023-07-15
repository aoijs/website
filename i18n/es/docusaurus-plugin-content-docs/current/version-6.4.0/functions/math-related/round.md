---
title: '$round'
description: '$round will round to the next whole number.'
id: round
---

`$round` will round to the next whole number.

## Modo de uso

```php
$round[number]
```

## Parámetros

| Campo  | Tipo   | Parámetros       | Requerido |
| ------ | ------ | ---------------- |:---------:|
| número | número | Number to round. | verdadera |

## Ejemplo(s)

This will return `555` as it's the next number to `555.78`:

```javascript
bot.command({
    name: 'round',
    code: `
  $round[555.78]
  `
});
```