---
title: $messageType
description: $messageType will return the type of a given message.
id: messageType
---

`$messageType` will return the type of a given message.

## Usage

```aoi
$messageType[messageID?;channelID?]
```

## Parameters

| Field      | Type                                                                                              | Description                                        | Required |
| ---------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------- | :------: |
| messageID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | ID of the message.                                 |  false   |
| channelID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | ID of the channel where the message is located in. |  false   |

## Example(s)

This will return the message type of the message which executed the command:

```javascript
client.command({
    name: "messageType",
    code: `
  $messageType[$messageID;$channelID]
  `
});
```
