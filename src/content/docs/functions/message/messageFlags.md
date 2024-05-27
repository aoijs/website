---
title: $messageFlags
description: $messageFlags will return a message's flags.
id: messageFlags
---

`$messageFlags` will return a message's flags.

## Usage

```aoi
$messageFlags[messageID;sep?;channelID?]
```

## Parameters

| Field      | Type                                                                                              | Description                                        | Required |
| ---------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------- | :------: |
| messageID  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the message.                             |   true   |
| sep?       | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Separator to separate returned values.             |  false   |
| channelID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | ID of the channel where the message is located in. |  false   |

## Example(s)

This will the message flags of your initial command message:

```javascript
client.command({
    name: "messageFlags",
    code: `
  $messageFlags[$messageID;, ;$channelID]
  `
});
```
