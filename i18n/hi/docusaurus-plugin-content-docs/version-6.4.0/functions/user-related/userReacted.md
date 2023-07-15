---
title: '$userReacted'
description: '$userReacted will check if a specified user reacted with a specific emoji to a specific message and return either true or false.'
id: userReacted
---

`$userReacted` will check if a specified user reacted with a specific emoji to a specific message and return either true or false.

## प्रोयोग

```php
$userReacted[channelID;messageID;userID;emoji]
```

## पैरामीटर्स

| फील्ड     | टाइप     | डिस्क्रिप्शन        | चाहिए |
| --------- | -------- | ------------------- |:-----:|
| guildID   | integer  | The guild ID.       | true  |
| messageID | integer  | The message ID.     | true  |
| userID    | integer  | The user ID.        | true  |
| emoji     | स्ट्रिंग | Emoji to check for. | true  |

## ट्रू (हा)

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
