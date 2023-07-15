---
title: '$customEmoji'
description: '$customEmoji will return a custom emoji.'
id: customEmoji
---

`$customEmoji` will return a custom emoji.

## Використання

```php
$customEmoji[emojiResolver;guildID?]
```

## Параметри

| Поле          | Тип             | Опис                                                                                                    | Обов'язковий |
| ------------- | --------------- | ------------------------------------------------------------------------------------------------------- |:------------:|
| emojiResolver | рядок           | Emoji name or ID.                                                                                       |     так      |
| guildID?      | string, integer | Where the emoji is from. <br /> 1. **global** <br /> 2. **guildID** - replace with guild ID |      ні      |

## Приклад(и)

This send a custom emoji of your choice, replace emojiResolver with an actual emoji name or ID:

Tries to search for the emoji in all guilds the bot is in:
```javascript
bot.command({
    name: 'customEmoji',
    code: `
  $customEmoji[emojiResolver;global]
  `
});
```

Tries to return the emoji of the given guild:
```javascript
bot.command({
    name: 'customEmoji',
    code: `
  $customEmoji[emojiResolver;specific guild ID]
  `
});
```