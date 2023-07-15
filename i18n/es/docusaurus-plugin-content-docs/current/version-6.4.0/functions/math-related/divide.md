---
title: '$divide'
description: '$divide will divide two given numbers.'
id: divide
---

`$divide` will divide two given numbers.

## Modo de uso

```php
$divide[...numbers;...numbers]
```

## Parámetros

| Campo   | Tipo   | Parámetros                                 | Requerido |
| ------- | ------ | ------------------------------------------ |:---------:|
| numbers | número | Numbers you want to divide with eachother. | verdadera |

## Ejemplo(s)

This will return `23` as `69/3` equals it.

```javascript
bot.command({
    name: 'divide',
    code: `
  $divide[69;3]
  `
});
```
