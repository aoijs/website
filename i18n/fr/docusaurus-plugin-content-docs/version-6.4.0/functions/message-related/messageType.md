---
title: '$messageType'
description: '$messageType will return the type of a given message.'
id: messageType
---

`$messageType` will return the type of a given message.

## Usage

```php
$messageType[messageID?;channelID?]
```

## Parameters

| Field      | Type    | Description                                        | Required |
| ---------- | ------- | -------------------------------------------------- |:--------:|
| messageID? | integer | ID of the message.                                 |  false   |
| channelID? | integer | ID of the channel where the message is located in. |  false   |

## Example(s)

This will return the message type of the message which executed the command:

```javascript
bot.command({
    name: 'messageType',
    code: `
  $messageType[$messageID;$channelID]
  `
});
```
