---
title: '$isInteger'
description: '$isInteger will check if the given number is an integer or not.'
id: isInteger
---

`$isInteger` will check if the given number is an integer or not.

## Uso

```php
$isInteger[number]
```

## Parámetros

| Campo  | Tipo   | Parámetros                                         | Requerido |
| ------ | ------ | -------------------------------------------------- |:---------:|
| número | número | Number you want to check if its an integer or not. | verdadera |

## Ejemplo(s)

This checks if your message contains an integer and returns `true` or `false`:

```javascript
bot.command({
    name: 'isInteger',
    code: `
  $isInteger[$message]
  `
});
```
