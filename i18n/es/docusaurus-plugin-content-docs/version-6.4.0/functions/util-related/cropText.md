---
title: '$cropText'
description: '$cropText will crop given text.'
id: cropText
---

`$cropText` is used to crop given text.

## Uso

```php
$cropText[text;limit;start?]
```

## Parámetros

| Campo  | Tipo     | Parámetros                                                               | Requerido |
| ------ | -------- | ------------------------------------------------------------------------ |:---------:|
| text   | consulta | Text you want to slice.                                                  | verdadero |
| limit  | número   | Limit of the cropped text/will start to crop any text coming after that. | verdadero |
| start? | número   | Where cropping should start.                                             |   falso   |

## Ejemplo(s)

This will return `bye` and remove `hello and` from the given text:

```javascript
bot.command({
    name: 'cropText',
    code: `
$cropText[hello and bye;20;9]
  `
});
```
