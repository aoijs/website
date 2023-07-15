---
title: '$removeTextSplitElement'
description: '$removeTextSplitElement will remove a specific text split element.'
id: removeTextSplitElement
---

`$removeTextSplitElement` will remove a specific text split element.

## Використання

```php
$removeTextSplitElement[element]
```

## Параметри

| Поле    | Тип   | Опис                          | Обов'язковий |
| ------- | ----- | ----------------------------- |:------------:|
| element | рядок | Text split element to remove. |     так      |

## Приклад(и)

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