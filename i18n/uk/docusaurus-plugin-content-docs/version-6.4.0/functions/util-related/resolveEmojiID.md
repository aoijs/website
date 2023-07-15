---
title: '$resolveEmojiID'
description: '$resolveEmojiID will resolve a certain emoji.'
id: resolveEmojiID
---

`$resolveEmojiID` will resolve a certain emoji.

## Використання

```php
$resolveEmojiID[emojiResolver]
```

## Параметри

| Поле          | Тип   | Опис                  | Обов'язковий |
| ------------- | ----- | --------------------- |:------------:|
| emojiResolver | рядок | Emoji name or string. |     так      |

## Приклад(и)

This will return `<:LerefMoney:1003365344724910191>`:

```javascript
bot.command({
    name: 'resolveEmojiID',
    code: `
  $resolveEmojiID[LerefMoney]
  `
});
```