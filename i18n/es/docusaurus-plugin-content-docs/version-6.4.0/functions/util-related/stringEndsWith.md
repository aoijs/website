---
title: '$stringEndsWith'
description: '$stringEndsWith will check if the given argument ends with something specific.'
id: stringEndsWith
---

`$stringEndsWith` will check if the given argument ends with something specific.

## Modo de uso

```php
$stringEndsWith[text;check]
```

## Parámetros

| Campo | Tipo     | Parámetros                                                             | Requerido |
| ----- | -------- | ---------------------------------------------------------------------- |:---------:|
| text  | consulta | The text that will be checked.                                         | verdadero |
| check | consulta | The argument that will check if the text ends with something specific. | verdadero |

## Ejemplo(s)

This will return `true` as `aoi.js` ends with `js`:

```javascript
bot.command({
    name: 'stringEndsWith',
    code: `
  $stringEndsWith[aoi.js;js]
  `
});
```