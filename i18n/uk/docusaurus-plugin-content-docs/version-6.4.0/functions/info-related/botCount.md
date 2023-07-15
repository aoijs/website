---
title: '$guildBotCount'
description: '$guildBotCount will return the amount of Bots in your guild.'
id: guildBotCount
---

`$guildBotCount` will return the amount of Bots in your guild.

## Використання

```php
$guildBotCount[guildID?]
```

## Параметри

| Поле     | Тип     | Опис                                                           | Обов'язковий |
| -------- | ------- | -------------------------------------------------------------- |:------------:|
| guildID? | integer | Guild ID of the guild you want to retrieve the amount of bots. |      ні      |

## Приклад(и)

This will return the amount of bots in your guild:

```javascript
bot.command({
    name: 'guildBotCount',
    code: `
  $guildBotCount
  `
});
```