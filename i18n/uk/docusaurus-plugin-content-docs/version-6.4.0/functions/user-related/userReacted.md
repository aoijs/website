---
title: '$userReacted'
description: '$userReacted will check if a specified user reacted with a specific emoji to a specific message and return either true or false.'
id: userReacted
---

`$userReacted` will check if a specified user reacted with a specific emoji to a specific message and return either true or false.

## Використання

```php
$userReacted[channelID;messageID;userID;emoji]
```

## Параметри

| Поле      | Тип     | Опис                | Обов'язковий |
| --------- | ------- | ------------------- |:------------:|
| guildID   | integer | The guild ID.       |     так      |
| messageID | integer | The message ID.     |     так      |
| userID    | integer | The user ID.        |     так      |
| emoji     | рядок   | Emoji to check for. |     так      |

## Приклад(и)

This will return `true` as the bot reacted to the initial command message:

```javascript
bot.command({
    name: 'userReacted',
    code: `
$userReacted[$channelID;$messageID;$clientID;😩]
$addCmdReactions[😩]
  `
});
```
