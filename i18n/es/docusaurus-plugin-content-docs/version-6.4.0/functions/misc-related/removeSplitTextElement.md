---
title: '$removeSplitTextElement'
description: '$removeSplitTextElement eliminará un elemento específico de texto dividido.'
id: removeSplitTextElement
---

`$removeSplitTextElement` eliminará un elemento de texto dividido específico.

## Uso

```php
$removeSplitTextElement[...elementos]
```

## Parámetros

| Campo        | Tipo   | Parámetros                             | Requerido |
| ------------ | ------ | -------------------------------------- |:---------:|
| ...elementos | cadena | Dividir elementos de texto a eliminar. | verdadera |

## Ejemplo(s)

Esto eliminará la palabra "bye" del arreglo:

```javascript
bot.command({
    name: "removeSplitTextElement",
    code: `
    $removeSplitTextElement[bye]
    $textSplit[hello, bye, aoi.js;, ]
    `
});
```