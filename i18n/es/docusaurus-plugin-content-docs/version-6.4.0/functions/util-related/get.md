---
title: '$get'
description: '$get is used for retrieving temporary variables.'
id: get
---

`$get` will retrieve temporary variables stored by `$let`.

## Modo de uso

```php
$get[var]
```

## Parámetros

| Campo | Tipo   | Parámetros                               | Requerido |
| ----- | ------ | ---------------------------------------- |:---------:|
| var   | string | Temporary variable you want to retrieve. | verdadera |

## Ejemplo(s)

This will return `Leref` from `$let`:

```javascript
bot.command({
    name: 'get',
    code: `
Aoi.js developer: $get[developer]
$let[developer;Leref]
`
});
```
