---
title: '$concatTextSplit'
description: '$concatTextSplit will concatenates the text with the given separator.'
id: concatTextSplit
---

`$concatTextSplit` will concatenates the text with the given separator.

## Використання

```php
$concatTextSplit[...text]
```

## Параметри

| Поле | Тип   | Опис                                               | Обов'язковий |
| ---- | ----- | -------------------------------------------------- |:------------:|
| text | рядок | Text to concat to the existing textSplit elements. |     так      |

## Приклад(и)

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
