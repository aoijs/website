---
title: $clearReaction
description: $clearReaction will remove a given reaction of a message of a given user.
id: clearReaction
---

`$clearReaction` will remove a given reaction of a message of a given user.

## Usage

```php
$clearReaction[channelID;messageID;userID;emoji]
```

## Parameters

| Field     | Type    | Description                                                                            | Required |
| --------- | ------- | -------------------------------------------------------------------------------------- | :------: |
| channelID | integer | The channel ID of where the message is located in.                                     |   true   |
| messageID | integer | The message ID.                                                                        |   true   |
| userID    | integer | The user ID of the user whose reactions shall be removed.                              |   true   |
| emoji     | string  | The exact emoji to remove. <br /> 1. **all** (default) <br /> 2. **emoji** - any emoji |   true   |

## Example(s)

This will add and remove the bot's reaction after two seconds:

```javascript
client.command({
  name: "clearReaction",
  code: `
  $clearReaction[$channelID;$messageID;$clientID;🥱]
  $wait[2s]
  $addCmdReactions[🥱]
  `
});
```
