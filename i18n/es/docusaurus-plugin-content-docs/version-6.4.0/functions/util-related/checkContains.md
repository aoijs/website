---
title: '$checkContains'
description: '$checkContains will check if the given arguments are present within a text.'
id: checkContains
---

`$checkContains` will check if the given arguments are present within the text.

## Modo de uso

```php
$checkContains[text;...chars]
```

## Parámetros

| Campo | Tipo     | Parámetros                  | Requerido |
| ----- | -------- | --------------------------- |:---------:|
| text  | consulta | Text you want to check.     | verdadero |
| chars | consulta | Text you want to check for. | verdadero |

## Ejemplo(s)

This will return `true` as `easy` and/or `simple` are present in the given text:

```javascript
bot.command({
    name: 'checkContains',
    code: `
  $checkContains[aoi.js is easy and simple to use for beginners;easy;simple]
  `
});
```
