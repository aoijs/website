---
title: '$deleteEmoji'
description: '$deleteEmoji will delete a specific emoji.'
id: deleteEmoji
---

`$deleteEmoji` will delete a specific emoji.

## Використання

```php
$deleteEmoji[emoji]
```

## Параметри

| Поле  | Тип   | Опис                                                            | Обов'язковий |
| ----- | ----- | --------------------------------------------------------------- |:------------:|
| emoji | рядок | Emoji Name, ID or full form of the emoji which will be deleted. |     так      |

## Приклад(и)

This will delete a random emoji of your guild:

```javascript
bot.command({
    name: 'deleteEmoji',
    code: `
  $deleteEmoji[$randomEmoji]
  `
});
```
