---
title: '$usersInChannel'
description: '$usersInChannel will return all users who are connected to the specified voice channel.'
id: usersInChannel
---

`$usersInChannel` will return all users who are connected to the specified voice channel.

## Використання

```php
$usersInChannel[channelID;option?;sep?]
```

## Параметри

| Поле      | Тип     | Опис                                                                                                   | Обов'язковий |
| --------- | ------- | ------------------------------------------------------------------------------------------------------ |:------------:|
| channelID | integer | Voice Channel ID.                                                                                      |     так      |
| option?   | рядок   | How to return the users <br /> 1. **id** (default) <br /> 2. **user** - mentions the users |      ні      |
| sep?      | рядок   | Separator to separate multiple returned values.                                                        |      ні      |

## Приклад(и)

This will return the users connected to a voice channel:

```javascript
bot.command({
    name: 'usersInChannel',
    code: `
  $usersInChannel[$voiceID;user;, ]
  `
});
```
