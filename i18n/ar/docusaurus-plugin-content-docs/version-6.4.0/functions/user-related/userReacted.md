---
title: '$userReacted'
description: '$userReacted will check if a specified user reacted with a specific emoji to a specific message and return either true or false.'
id: userReacted
---

`$userReacted` will check if a specified user reacted with a specific emoji to a specific message and return either true or false.

## الاستخدام

```php
$userReacted[channelID;messageID;userID;emoji]
```

## البارامترات

| Field     | النوع   | الديسكبربشين        | مطلوب |
| --------- | ------- | ------------------- |:-----:|
| guildID   | Integer | The guild ID.       | true  |
| messageID | Integer | The message ID.     | true  |
| userID    | Integer | The user ID.        | true  |
| emoji     | string  | Emoji to check for. | true  |

## مثال

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
