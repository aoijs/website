---
title: $addMessageReactions
description: $addMessageReactions will add a reaction to a specific message.
id: addMessageReactions
---

`$addMessageReactions` will add a reaction to a specific message.

## Usage

```php
$addMessageReactions[channelID;messageID;...reactions]
```

## Parameters

| Field     | Type    | Description                                 | Required |
| --------- | ------- | ------------------------------------------- | :------: |
| channelID | integer | Channel ID of where the message is located. |   true   |
| messageID | integer | Message ID.                                 |   true   |
| reactions | string  | Reactions to add.                           |   true   |

## Example(s)

This will add the given reactions to your message:

```javascript
bot.command({
    name: 'addMessageReactions',
    code: `
 $addMessageReactions[$channelID;$messageID;✅;❌]
  `
});
```
