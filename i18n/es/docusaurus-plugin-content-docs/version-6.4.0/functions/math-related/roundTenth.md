---
title: '$roundTenth'
description: '$roundTenth redondeará a la décima siguiente.'
id: roundTenth
---

`$roundTenth` redondeará a la décima siguiente.

## Modo de uso

```php
$roundTenth[número;posiciónDecimal]
```

## Parámetros

| Campo           | Tipo   | Parámetros                                        | Requerido |
| --------------- | ------ | ------------------------------------------------- |:---------:|
| número          | número | Número a redondear.                               | verdadero |
| posiciónDecimal | entero | Cuántos números se devolverán después de la coma. | verdadero |

## Ejemplo(s)

Esto devolverá `503.70` ya que es el número más cercano a `503.6972`:

```javascript
bot.command({
    name: 'roundTenth',
    code: `
  $roundTenth[503.6972]
  `
});
```