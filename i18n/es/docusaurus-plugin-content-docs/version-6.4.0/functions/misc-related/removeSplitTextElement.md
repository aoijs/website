---
title: '$removeSplitTextElement'
description: '$removeSplitTextElement will remove a specific split text element.'
id: removeSplitTextElement
---

`$removeSplitTextElement` will remove a specific split text element.

## Modo de uso

```php
$removeSplitTextElement[...elements]
```

## Parámetros

| Campo        | Tipo   | Parámetros                     | Requerido |
| ------------ | ------ | ------------------------------ |:---------:|
| ...elementos | string | Split text elements to remove. | verdadera |

## Ejemplo(s)

This will remove the word "bye" from the array:

```javascript
bot.command({
    name: "removeSplitTextElement",
    code: `
    $removeSplitTextElement[bye]
    $textSplit[hello, bye, aoi.js;, ]
    `
});
```