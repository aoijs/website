---
title: '$findTextSplitIndex'
description: '$findTextSplitIndex devolverá el índice de un elemento dividido de texto después de una consulta determinada.'
id: findTextSplitIndex
---

`$findTextSplitIndex` devolverá el índice de un elemento de división de texto después de una consulta determinada.

## Uso

```php
$findTextSplitIndex[consulta]
```

## Parámetros

| Campo    | Tipo   | Parámetros | Requerido |
| -------- | ------ | ---------- |:---------:|
| consulta | string | Consultas  | verdadera |

## Ejemplo(s)

Esto devolverá `3` como la primera `Cya` en esta `$textSplit` está en la tercera posición:

```javascript
bot.command({
    name: "findTextSplitIndex",
    code: `
  $findTextSplitIndex[Cya]
  $textSplit[Hello, Bye, Cya;, ]
  `
});
```