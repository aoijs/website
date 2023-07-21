---
title: $splitText
description: '$splitText devolverá un valor de $textSplit dependiendo del índice dado.'
id: splitText
---

`$splitText` devolverá un valor de $textSplit dependiendo del índice dado.

## Uso

```php
$splitText[index]
```

## Parámetros

| Campo  | Tipo    | Parámetros                        | Requerido |
| ------ | ------- | --------------------------------- |:---------:|
| índice | integer | Índice de contenido `$textSplit`. | verdadera |

## Ejemplo(s)

Esto devolverá `aoi.js` ya que es el segundo argumento de `$textSplit`:

```javascript
bot.command({
    name: 'splitText',
    code: `
  $splitText[2]
  $textSplit[@akarui/aoi.db//aoi.js;//]
  `
});
```