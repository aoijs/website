---
title: '$allEmojisCount'
description: '$allEmojisCount will return the amount of emojis of a given type.'
id: allEmojisCount
---

`$allEmojisCount` will return the amount of emojis of a given type.

## Використання

```php
$allEmojisCount[type?]
```

## Параметри

| Поле | Тип   | Опис                                        | Обов'язковий |
| ---- | ----- | ------------------------------------------- | ------------ |
| тип? | рядок | Type you want the amount of to be returned. | ні           |

| Emoji Type      |          |
| --------------- | -------- |
| Animated Emojis | animated |
| Stable Emojis   | normal   |

## Приклад(и)

This will return the amount of emojis in your guild:

```javascript
bot.command({
    name: 'allEmojisCount',
    code: `
  $allEmojisCount
  `
});
```