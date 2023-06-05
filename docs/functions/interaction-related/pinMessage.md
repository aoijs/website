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

| Field     | Type    | Description                                        | Required |
| --------- | ------- | -------------------------------------------------- | :------: |
| messageID | integer | The ID of the message that will be pinned.         |  false   |
| channelID | integer | The channel ID of where the message is located in. |  false   |

## Example(s)

This will pin the bot's message:

```javascript
bot.command({
    name: 'pinMessage',
    code: `
  $pinMessage[$get[id]]
  $let[id;$sendMessage[Hello!;true]
  ` // using $let & $get to save the message ID
});
```