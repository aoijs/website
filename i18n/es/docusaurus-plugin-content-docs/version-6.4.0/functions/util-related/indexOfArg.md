---
title: '$indexOfArg'
description: '$indexOfArg devolverá el índice de la consulta dada.'
id: indexOfArg
---

`$indexOfArg` devolverá el índice de la consulta dada.

## Uso

```php
$indexOfArg[string;query]
```

## Parámetros

| Campo    | Tipo     | Parámetros                             | Requerido |
| -------- | -------- | -------------------------------------- |:---------:|
| string   | consulta | El texto del bot comprobará el índice. | verdadero |
| consulta | consulta | La consulta que el bot buscará.        | verdadero |

## Ejemplo(s)

Esto devolverá `3` como `gran` es el tercer argumento en la consulta:

```javascript
bot.command({
    name: 'indexOfArgs',
    code: `
  $indexOfArgs[aoi.js is great for users who are new to Discord's API!;great]
  `
});
```
