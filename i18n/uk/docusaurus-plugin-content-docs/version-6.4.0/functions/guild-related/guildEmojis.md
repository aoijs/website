---
title: '$guildEmojis'
description: '$guildEmojis will return the emojis of a specific guild.'
id: guildEmojis
---

`$guildEmojis` will return the emojis of a specific guild.

## Використання

```php
$guildEmojis[sep?;guildID?]
```

## Параметри

| Поле     | Тип     | Опис                                           | Обов'язковий |
| -------- | ------- | ---------------------------------------------- |:------------:|
| sep?     | рядок   | The separator to separate the returned emojis. |      ні      |
| guildID? | integer | The ID of the guild.                           |      ні      |

## Приклад(и)

This will return the emojis of your guild:

```javascript
bot.command({
    name: 'guildEmojis',
    code: `
  $guildEmojis[, ;$guildID]
  `
});
```
