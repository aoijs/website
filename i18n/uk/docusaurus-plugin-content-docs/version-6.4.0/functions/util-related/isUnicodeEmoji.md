---
title: '$isUnicodeEmoji'
description: '$isUnicodeEmoji will check if the given emoji is an unicode emoji.'
id: isUnicodeEmoji
---

`$isUnicodeEmoji` will check if the given emoji is an unicode emoji.

## Використання

```php
$isUnicodeEmoji[emojiResolver]
```

## Параметри

| Поле          | Тип   | Опис           | Обов'язковий |
| ------------- | ----- | -------------- |:------------:|
| emojiResolver | рядок | Unicode emoji. |     так      |

## Приклад(и)

This will return `true` as "🤓" is an valid unicode emoji:

```javascript
bot.command({
    name: 'isUnicodeEmoji',
    code: `
  $isUnicodeEmoji[🤓]
  `
});
```
