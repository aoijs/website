---
title: '$clearReaction'
description: '$clearReaction will remove a given reaction of a message of a given user.'
id: clearReaction
---

`$clearReaction` will remove a given reaction of a message of a given user.

## الاستخدام

```php
$clearReaction[channelID;messageID;userID;emoji]
```

## البارامترات

| Field     | النوع   | الديسكبربشين                                                                                       | مطلوب |
| --------- | ------- | -------------------------------------------------------------------------------------------------- |:-----:|
| channelID | Integer | The channel ID of where the message is located in.                                                 | true  |
| messageID | Integer | The message ID.                                                                                    | true  |
| userID    | Integer | The user ID of the user whose reactions shall be removed.                                          | true  |
| emoji     | string  | The exact emoji to remove. <br /> 1. **all** (default) <br /> 2. **emoji** - any emoji | true  |

## مثال

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
