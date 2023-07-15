---
title: '$isNumber'
description: '$isNumber will check if the given argument is a number.'
id: isNumber
---

`$isNumber` will check if the given argument is a number.

## Modo de uso

```php
$isNumber[num]
```

## Parámetros

| Campo | Tipo   | Parámetros                                  | Requerido |
| ----- | ------ | ------------------------------------------- |:---------:|
| num   | número | Argument you want to check if its a number. | verdadera |

## Ejemplo(s)

This will return `true` as `255` is a valid number:

```javascript
bot.command({
    name: 'isNumber',
    code: `
  $isNumber[255]
  `
});
```
