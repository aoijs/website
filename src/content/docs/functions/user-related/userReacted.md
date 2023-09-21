---
title: $userReacted
description: $userReacted will check if a specified user reacted with a specific emoji to a specific message and return either true or false.
id: userReacted
---

`$userReacted` will check if a specified user reacted with a specific emoji to a specific message and return either true
or false.

## Usage

```php
$userReacted[channelID;messageID;userID;emoji]
```

## Parameters

| Field     | Type    | Description         | Required |
| --------- | ------- | ------------------- | :------: |
| guildID   | integer | The guild ID.       |   true   |
| messageID | integer | The message ID.     |   true   |
| userID    | integer | The user ID.        |   true   |
| emoji     | string  | Emoji to check for. |   true   |

## Example(s)

This will return `true` as the bot reacted to the initial command message:

```javascript
client.command({
  name: "userReacted",
  code: `
$userReacted[$channelID;$messageID;$clientID;😩]
$addCmdReactions[😩]
  `,
});
```
