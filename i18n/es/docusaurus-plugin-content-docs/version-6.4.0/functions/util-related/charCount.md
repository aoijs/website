---
title: '$charCount'
description: '$charCount contará los caracteres dados en un texto y devolverá la cantidad de caracteres.'
id: charCount
---

$charCount contará los caracteres dados en un texto y devolverá la cantidad de caracteres.

## Uso

```php
$charCount[texto]
```

## Parámetros

| Campo | Tipo   | Parámetros                                            | Requerido |
| ----- | ------ | ----------------------------------------------------- |:---------:|
| text  | cadena | El texto que será el recuento de caracteres devuelto. | verdadera |

## Ejemplo(s)

Esto devolverá `77` ya que hay 77 caracteres en este texto:

```javascript
bot.command({
    name: 'charCount',
    code: `
  $charCount[aoi.js is one of the simplest and easiest ways to create your own Discord Bot]
  `
});
```
