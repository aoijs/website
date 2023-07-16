---
title: '$let'
description: '$let is used for storing temporary variables.'
id: let
---

`$let` will store temporary variables which can be retrieved by `$get`.

## Uso

```php
$let[varname;value]
```

## Parámetros

| Campo   | Tipo     | Parámetros                                        | Requerido |
| ------- | -------- | ------------------------------------------------- |:---------:|
| varname | consulta | Name of the temporary variable.                   | verdadero |
| value   | consulta | Value of the temporary variable you want to save. | verdadero |

## Ejemplo(s)

This will return `Ayaka` from `$get`:

```javascript
bot.command({
    name: 'let',
    code: `
$get[genius]
$let[genius;Ayaka]
`
});
```
