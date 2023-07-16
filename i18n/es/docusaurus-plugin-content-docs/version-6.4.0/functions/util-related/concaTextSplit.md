---
title: '$concatTextSplit'
description: '$concatTextSplit will concatenates the text with the given separator.'
id: concatTextSplit
---

`$concatTextSplit` will concatenates the text with the given separator.

## Uso

```php
$concatTextSplit[...text]
```

## Parámetros

| Campo | Tipo   | Parámetros                                         | Requerido |
| ----- | ------ | -------------------------------------------------- |:---------:|
| text  | string | Text to concat to the existing textSplit elements. | verdadera |

## Ejemplo(s)

This will add `Hello, Bye` to the already used `$textSplit` argument:

```javascript
bot.command({
    name: 'concatTextSplit',
    code: `
  $concatTextSplit[Hello;Bye]
  $textSplit[Goodmorning, Goodnight;, ]
  `
});
```
