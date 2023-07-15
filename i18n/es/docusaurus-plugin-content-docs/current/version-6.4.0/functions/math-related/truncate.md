---
title: '$truncate'
description: '$truncate will remove all values after a decimal point.'
id: truncate
---

`$truncate` will remove all values after a decimal point.

## Modo de uso

```php
$truncate[number]
```

## Parámetros

| Campo  | Tipo   | Parámetros          | Requerido |
| ------ | ------ | ------------------- |:---------:|
| número | número | Number to truncate. | verdadera |

## Ejemplo(s)

This will return `775` and remove `.9723` from the given value:

```javascript
bot.command({
    name: 'truncate',
    code: `
  $truncate[775.9723]
  `
});
```