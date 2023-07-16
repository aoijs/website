---
title: '$round'
description: '$round redondeará al siguiente número entero.'
id: round
---

`$round` redondeará al siguiente número entero.

## Uso

```php
$round[número]
```

## Parámetros

| Campo  | Tipo   | Parámetros          | Requerido |
| ------ | ------ | ------------------- |:---------:|
| número | número | Número a redondear. | verdadera |

## Ejemplo(s)

Esto devolverá `555` ya que es el siguiente número a `555.78`:

```javascript
bot.command({
    name: 'round',
    code: `
  $round[555.78]
  `
});
```