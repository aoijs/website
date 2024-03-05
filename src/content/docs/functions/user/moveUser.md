---
title: $moveUser
description: $moveUser will move a given user between two Voice Channels.
id: moveUser
---

`$moveUser` will move a given user between two Voice Channels.

## Usage

```php
$moveUser[guildID;userID;channelID;reason?]
```

## Parameters

| Field     | Type                                                                                              | Description                                              | Required |
| --------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | :------: |
| guildID   | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The guild ID of where the voice channel is located in.   |   true   |
| userID    | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The user ID of the user to move.                         |   true   |
| channelID | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The Voice Channel ID of where the user will be moved to. |   true   |
| reason?   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Reason that will be displayed in the guild's audit logs. |  false   |

## Example(s)

This will move a user to another Voice Channel:

```javascript
client.command({
  name: "moveUser",
  code: `
  $moveUser[$guildID;userID;new voice channel ID;Testing!]
  `
});
```
