---
title: '$math'
description: '$math devolverá un resultado calculado del argumento dado.'
id: math
---

`$math` devolverá un resultado calculado del argumento dado.

## Modo de uso

```php
$math[ecuación]
```

## Parámetros

| Campo    | Tipo   |    Parámetros    | Requerido |
| -------- | ------ |:----------------:|:---------:|
| ecuación | string | Cálculo (/*-+()) | verdadera |

## Ejemplo(s)

Esto devolverá `205` ya que `15+5/2*26+(5+120)` lo iguala:

```javascript
bot.command({
    name: 'math',
    code: `
  $math[15+5/2*26+(5+120)]
  `
});
```
