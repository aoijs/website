---
title: $editMessage
description: $editMessage will edit a given message.
id: editMessage
---

`$editMessage` will edit a given message.

## Usage

```php
$editMessage[messageID;content;channelID?]
```

## Parameters

| Field      | Type                                                                                                | Description                                        | Required |
| ---------- | --------------------------------------------------------------------------------------------------- | -------------------------------------------------- | :------: |
| messageID  | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | The message that should be edited.                 |   true   |
| content    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The content of the new message.                    |   true   |
| channelID? | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | The channel ID of where the message is located in. |  false   |

You can only edit messages that were sent by the bot itself.

## Example(s)

This will edit the sent message after five seconds: ( works the same way as `$editIn` )

```javascript
client.command({
  name: "editMessage",
  code: `
  $editMessage[$get[id];Bye!]
  $wait[5s]
  $let[id;$sendMessage[Hello!;true]]
  `,
});
```
