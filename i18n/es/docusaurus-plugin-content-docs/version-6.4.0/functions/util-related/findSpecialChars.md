---
title: '$findSpecialChars'
description: '$findSpecialChars devolverá todos los caracteres especiales del argumento dado.'
id: findSpecialChars
---

`$findSpecialChars` devolverá todos los caracteres especiales del argumento dado.

## Uso

```php
$findSpecialChars[texto]
```

## Parámetros

| Campo | Tipo   | Parámetros                                           | Requerido |
| ----- | ------ | ---------------------------------------------------- |:---------:|
| texto | cadena | Texto donde quieres encontrar caracteres especiales. | verdadera |

## Ejemplo(s)

Esto devolvera  `######`:

```javascript
bot.command({
    name: 'findSpecialChars',
    code: `
  $findSpecialChars[Aoi.js is ###### great]
  `
});
```
