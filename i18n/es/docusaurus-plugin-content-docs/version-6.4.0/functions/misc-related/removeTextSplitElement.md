---
title: '$removeTextSplitElement'
description: '$removeTextSplitElement will remove a specific text split element.'
id: removeTextSplitElement
---

`$removeTextSplitElement` will remove a specific text split element.

## Uso

```php
$removeTextSplitElement[element]
```

## Parámetros

| Campo   | Tipo   | Parámetros                    | Requerido |
| ------- | ------ | ----------------------------- |:---------:|
| element | string | Text split element to remove. | verdadera |

## Ejemplo(s)

This will remove the word "bye" from the array:

```javascript
bot.command({
    name: "removeTextSplitElement",
    code: `
    $removeTextSplitElement[bye]
    $textSplit[hello, bye, aoi.js;, ]
    `
});
```