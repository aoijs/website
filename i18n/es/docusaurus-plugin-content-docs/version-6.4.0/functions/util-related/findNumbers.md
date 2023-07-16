---
title: '$findNumbers'
description: '$findNumbers intentará devolver todos los números en un mensaje de un texto determinado.'
id: findNumbers
---

`$findNumbers` intentará devolver todos los números en un mensaje de un texto determinado.

## Uso

```php
$findNumbers[texto]
```

## Parámetros

| Campo | Tipo   | Parámetros                             | Requerido |
| ----- | ------ | -------------------------------------- |:---------:|
| texto | cadena | Texto donde quieres encontrar números. | verdadera |

## Ejemplo(s)

Esto devolverá `25` y eliminará `Hello, I'm [..]   years old` del texto dado:

```javascript
bot.command({
    name: 'findNumbers',
    code: `
  $findNumbers[Hello, I'm 25 years old]
  `
});
```
