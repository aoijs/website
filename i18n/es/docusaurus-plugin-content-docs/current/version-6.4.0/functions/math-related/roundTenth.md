---
title: '$roundTenth'
description: '$roundTenth will round to the next tenth.'
id: roundTenth
---

`$roundTenth` will round to the next tenth.

## Modo de uso

```php
$roundTenth[number;decimalPosition]
```

## Parámetros

| Campo           | Tipo   | Parámetros                                         | Requerido |
| --------------- | ------ | -------------------------------------------------- |:---------:|
| número          | número | Number to round.                                   | verdadero |
| decimalPosition | entero | How many numbers after the comma will be returned. | verdadero |

## Ejemplo(s)

This will return `503.70` as it's the nearest number to `503.6972`:

```javascript
bot.command({
    name: 'roundTenth',
    code: `
  $roundTenth[503.6972]
  `
});
```