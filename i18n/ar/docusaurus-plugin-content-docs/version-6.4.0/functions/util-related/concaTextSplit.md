---
title: '$concatTextSplit'
description: '$concatTextSplit will concatenates the text with the given separator.'
id: concatTextSplit
---

`$concatTextSplit` will concatenates the text with the given separator.

## الاستخدام

```php
$concatTextSplit[...text]
```

## البارامترات

| Field | النوع  | الديسكبربشين                                       | مطلوب |
| ----- | ------ | -------------------------------------------------- |:-----:|
| text  | string | Text to concat to the existing textSplit elements. | true  |

## مثال

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
