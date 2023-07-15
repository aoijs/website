---
title: '$clearReaction'
description: '$clearReaction will remove a given reaction of a message of a given user.'
id: clearReaction
---

`$clearReaction` will remove a given reaction of a message of a given user.

## Використання

```php
$clearReaction[channelID;messageID;userID;emoji]
```

## Параметри

| Поле      | Тип     | Опис                                                                                               | Обов'язковий |
| --------- | ------- | -------------------------------------------------------------------------------------------------- |:------------:|
| channelID | integer | The channel ID of where the message is located in.                                                 |     так      |
| messageID | integer | The message ID.                                                                                    |     так      |
| userID    | integer | The user ID of the user whose reactions shall be removed.                                          |     так      |
| emoji     | рядок   | The exact emoji to remove. <br /> 1. **all** (default) <br /> 2. **emoji** - any emoji |     так      |

## Приклад(и)

This will add and remove the bot's reaction after two seconds:

```javascript
bot.command({
    name: 'clearReaction',
    code: `
  $clearReaction[$channelID;$messageID;$clientID;🥱]
  $wait[2s]
  $addCmdReactions[🥱]
  `
});
```
