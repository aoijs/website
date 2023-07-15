---
title: '$removeContains'
description: '$removeContains will remove specific text from a give text.'
id: removeContains
---

`$removeContains` will remove specific text from a give text.

## Використання

```php
$removeContains[content;...words]
```

## Параметри

| Поле     | Тип   | Опис                                 | Обов'язковий |
| -------- | ----- | ------------------------------------ |:------------:|
| content  | рядок | Text where to remove the words from. |     так      |
| ...words | рядок | Text to remove from the text.        |     так      |

## Приклад(и)

This will remove the word "aoi.js from the given text:

```javascript
bot.command({
    name: "removeContains",
    code: `
    $removeContains[Hello, aoi.js!;, ;aoi.js]
    `
});
```