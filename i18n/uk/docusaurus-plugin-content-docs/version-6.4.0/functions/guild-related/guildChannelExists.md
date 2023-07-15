---
title: '$guildChannelExists'
description: '$guildChannelExists will check if a given guild channel exists.'
id: guildChannelExists
---

`$guildChannelExists` will check if a given guild channel exists.

## Використання

```php
$guildChannelExists[guildID;channelResolver]
```

## Параметри

| Поле            | Тип             | Опис                                               | Обов'язковий |
| --------------- | --------------- | -------------------------------------------------- |:------------:|
| guildID         | integer         | ID of the guild where the guild channel exists in. |     так      |
| channelResolver | integer, string | Channel ID or name of the channel.                 |     так      |

## Приклад(и)

This will check if a guild channel with the name `rules` exists, alternatively you could use the channel ID instead:

```javascript
bot.command({
    name: 'guildChannelExists',
    code: `
  $guildChannelExists[$guildID;rules]
  `
});
```
