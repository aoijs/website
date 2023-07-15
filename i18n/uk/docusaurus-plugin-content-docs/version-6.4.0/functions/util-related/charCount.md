---
title: '$charCount'
description: '$charCount will count the given characters in a text and return the amount of characters.'
id: charCount
---

`$charCount` will count the given characters in a text and return the amount of characters.

## Використання

```php
$charCount[text]
```

## Параметри

| Поле | Тип   | Опис                                                   | Обов'язковий |
| ---- | ----- | ------------------------------------------------------ |:------------:|
| text | рядок | The text that will be the character count returned of. |     так      |

## Приклад(и)

This will return `77` as there are 77 characters in this text:

```javascript
bot.command({
    name: 'charCount',
    code: `
  $charCount[aoi.js is one of the simplest and easiest ways to create your own Discord Bot]
  `
});
```
