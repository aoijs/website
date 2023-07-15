---
title: '$findGuildChannel'
description: '$findGuildChannel will search a guild channel within a guild.'
id: findGuildChannel
---

`$findGuildChannel` will search a guild channel within a guild.

## Використання

```php
$findGuildChannel[channelResolver;returnSelf?;guildID?]
```

## Параметри

| Поле            | Тип     | Опис                                                                     | Обов'язковий |
| --------------- | ------- | ------------------------------------------------------------------------ |:------------:|
| channelResolver | рядок   | Name of the channel you are trying to find.                              |     так      |
| returnSelf?     | boolean | Return the channel where the command got executed in when nothing found. |      ні      |
| guildID?        | integer | ID of the guild where the channel is present in.                         |      ні      |

## Приклад(и)

This will return the channel ID of an channel called `#rules`

```javascript
bot.command({
    name: 'findGuildChannel',
    code: `
  $findGuildChannel[rules;false;$guildID]
  `
});
```
