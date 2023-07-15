---
title: '$expandNumber'
description: '$expandNumber will expand any given number.'
id: expandNumber
---

`$expandNumber` will expand any given number.

## Modo de uso

```php
$expandNumber[abbrNumber]
```

## Parámetros

| Campo      | Tipo   | Parámetros                 | Requerido |
| ---------- | ------ | -------------------------- |:---------:|
| abbrNumber | string | Number you want to expand. | verdadera |

## Ejemplo(s)

This will return `1300000`:

```javascript
bot.command({
    name: 'expandNumber',
    code: `
  $expandNumber[1.3m]`
});
```
