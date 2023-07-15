---
title: '$joinSplitText'
description: '$joinSplitText will join all text split elements by a given separator.'
id: joinSplitText
---

`$joinSplitText` will join all text split elements by a given separator.

## Modo de uso

```php
$joinSplitText[sep?]
```

## Parámetros

| Campo | Tipo    | Parámetros                                      | Requerido |
| ----- | ------- | ----------------------------------------------- |:---------:|
| sep?  | integer | Separator to separate multiple returned values. |    no     |

## Ejemplo(s)

This will join all text split elements with a comma:

```javascript
bot.command({
    name: "joinSplitText",
    code: `
    $joinSplitText[, ]
    $textSplit[Hello:Bye:Leref;:]
    `
});
```