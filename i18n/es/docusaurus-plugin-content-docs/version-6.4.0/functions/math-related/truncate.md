---
title: '$truncate'
description: '$truncate eliminará todos los valores después del punto decimal.'
id: truncate
---

`$truncate` eliminará todos los valores después del punto decimal.

## Uso

```php
$truncate[número]
```

## Parámetros

| Campo  | Tipo   | Parámetros        | Requerido |
| ------ | ------ | ----------------- |:---------:|
| número | número | Número a truncar. | verdadera |

## Ejemplo(s)

Esto devolverá `775` y eliminará `.9723` del valor dado:

```javascript
bot.command({
    name: 'truncate',
    code: `
  $truncate[775.9723]
  `
});
```