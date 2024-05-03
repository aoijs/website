---
title: $pinMessage
description: $pinMessage will pin a given message.
id: pinMessage
---

`$pinMessage` will pin a given message.

## Usage

```php
$pinMessage[messageID?;channelID?]
```

## Parameters

| Field     | Type                                                                                              | Description                                        | Required |
| --------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------- | :------: |
| messageID | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the message that will be pinned.         |  false   |
| channelID | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The channel ID of where the message is located in. |  false   |

## Example(s)

This will pin the bot's message:

```javascript
client.command({
    name: "pinMessage",
    code: `
  $pinMessage[$get[id]]
  $let[id;$sendMessage[Hello!;true]
  ` // using $let & $get to save the message ID
});
```
