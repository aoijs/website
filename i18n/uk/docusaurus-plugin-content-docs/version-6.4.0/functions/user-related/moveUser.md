---
title: '$moveUser'
description: '$moveUser will move a given user between two Voice Channels.'
id: moveUser
---

`$moveUser` will move a given user between two Voice Channels.

## Використання

```php
$moveUser[guildID;userID;channelID;reason?]
```

## Параметри

| Поле      | Тип     | Опис                                                     | Обов'язковий |
| --------- | ------- | -------------------------------------------------------- |:------------:|
| guildID   | integer | The guild ID of where the voice channel is located in.   |     так      |
| userID    | integer | The user ID of the user to move.                         |     так      |
| channelID | integer | The Voice Channel ID of where the user will be moved to. |     так      |
| reason?   | рядок   | Reason that will be displayed in the guild's audit logs. |      ні      |

## Приклад(и)

This will move a user to another Voice Channel:

```javascript
bot.command({
    name: 'moveUser',
    code: `
  $moveUser[$guildID;userID;new voice channel ID;Testing!]
  `
});
```