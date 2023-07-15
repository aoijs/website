---
title: '$guildEmojiExists'
description: '$guildEmojiExists will check if the given emoji exists in the given guild.'
id: guildEmojiExists
---

`$guildEmojiExists` will check if the given emoji exists in the given guild.

## Використання

```php
$guildEmojiExists[emojiResolver;guildId?]
```

## Параметри

| Поле          | Тип     | Опис                                    | Обов'язковий |
| ------------- | ------- | --------------------------------------- |:------------:|
| emojiResolver | рядок   | Emoji you want to check if it exists.   |     так      |
| guildID?      | integer | ID of the guild where the emoji exists. |      ні      |

## Приклад(и)

This will return `true` as the ![emoji](https://cdn.discordapp.com/emojis/1003365344724910191.webp?size=16&quality=lossless) emoji exists:

```javascript
bot.command({
    name: 'guildEmojiExists',
    code: `
  $guildEmojiExists[<:LerefMoney:1003365344724910191>;$guildID]
  `
});
```
