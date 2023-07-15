---
title: '$emojiCount'
description: '$emojiCount will return the emoji count of a guild.'
id: emojiCount
---

`$emojiCount` will return the emoji count of a guild.

## Використання

```php
$emojiCount[guildID?]
```

## Параметри

| Поле     | Тип     | Опис                                                   | Обов'язковий |
| -------- | ------- | ------------------------------------------------------ |:------------:|
| guildID? | integer | From where the emojis will be counted and returned of. |      ні      |

## Приклад(и)

This will return the emoji count of your guild:

```javascript
bot.command({
    name: 'emojiCount',
    code: `
  You have $emojiCount emojis in your guild!
  `
});
```