---
title: '$stringStartsWith'
description: '$stringStartsWith will check if the given argument starts with something specific.'
id: stringStartsWith
---

`$stringStartsWith` will check if the given argument starts with something specific.

## Modo de uso

```php
$stringStartsWith[text;check]
```

## Parámetros

| Campo | Tipo     | Parámetros                                                               | Requerido |
| ----- | -------- | ------------------------------------------------------------------------ |:---------:|
| text  | consulta | The text that will be checked.                                           | verdadero |
| check | consulta | The argument that will check if the text starts with something specific. | verdadero |

## Ejemplo(s)

This will return `true` as `aoi.js` starts with `aoi`:

```javascript
bot.command({
    name: 'stringStartsWith',
    code: `
  $stringStartsWith[aoi.js;aoi]
  `
});
```