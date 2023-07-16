---
title: '$findSpecialChars'
description: '$findSpecialChars will return all special characters of the given argument.'
id: findSpecialChars
---

`$findSpecialChars` will return all special characters of the given argument.

## Uso

```php
$findSpecialChars[text]
```

## Parámetros

| Campo | Tipo   | Parámetros                                      | Requerido |
| ----- | ------ | ----------------------------------------------- |:---------:|
| text  | string | Text where you want to find special characters. | verdadera |

## Ejemplo(s)

This will return `######`:

```javascript
bot.command({
    name: 'findSpecialChars',
    code: `
  $findSpecialChars[Aoi.js is ###### great]
  `
});
```
