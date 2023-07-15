---
title: '$deleteEmojis'
description: '$deleteEmojis will delete multiple emoji.'
id: deleteEmojis
---

`$deleteEmojis` will delete multiple emoji.

## Використання

```php
$deleteEmojis[...emojis]
```

## Параметри

| Поле   | Тип   | Опис                                                            | Обов'язковий |
| ------ | ----- | --------------------------------------------------------------- |:------------:|
| emojis | рядок | Emoji Name, ID or full form of the emoji which will be deleted. |     так      |

## Приклад(и)

This will delete two random emojis of your guild:

```javascript
bot.command({
    name: 'deleteEmojis',
    code: `
  $deleteEmojis[$randomEmoji;$randomEmoji]
  `
});
```
