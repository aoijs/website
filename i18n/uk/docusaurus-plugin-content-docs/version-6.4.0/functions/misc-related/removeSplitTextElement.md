---
title: '$removeSplitTextElement'
description: '$removeSplitTextElement will remove a specific split text element.'
id: removeSplitTextElement
---

`$removeSplitTextElement` will remove a specific split text element.

## Використання

```php
$removeSplitTextElement[...elements]
```

## Параметри

| Поле        | Тип   | Опис                           | Обов'язковий |
| ----------- | ----- | ------------------------------ |:------------:|
| ...elements | рядок | Split text elements to remove. |     так      |

## Приклад(и)

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