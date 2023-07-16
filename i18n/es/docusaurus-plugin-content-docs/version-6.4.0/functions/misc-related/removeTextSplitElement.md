---
title: '$removeTextSplitElement'
description: '$removeTextSplitElement eliminará un elemento de texto dividido específico.'
id: removeTextSplitElement
---

`$removeTextSplitElement` eliminará un elemento de texto dividido específico.

## Uso

```php
$removeTextSplitElement[elemento]
```

## Parámetros

| Campo    | Tipo   | Parámetros                                | Requerido |
| -------- | ------ | ----------------------------------------- |:---------:|
| elemento | cadena | Elemento dividido de texto para eliminar. | verdadera |

## Ejemplo(s)

Esto eliminará la palabra "bye" del arreglo:

```javascript
bot.command({
    name: "removeTextSplitElement",
    code: `
    $removeTextSplitElement[bye]
    $textSplit[hello, bye, aoi.js;, ]
    `
});
```