---
title: $sendCrosspostingMessage
description: $sendCrosspostingMessage will crosspost a given message to the given channels.
id: sendCrosspostingMessage
---

`$sendCrosspostingMessage` will crosspost a given message to the given channels.

## Usage

```php
$sendCrosspostingMessage[content;...channelIDs]
```

## Parameters

| Field         | Type    | Description                      | Required |
| ------------- | ------- | -------------------------------- | :------: |
| content       | string  | The message to send.             |   true   |
| ...channelIDs | integer | Where to send the given message. |   true   |

## Example(s)

This will crosspost a message to multiple channels in your server:

```javascript
client.command({
  name: "sendCrosspostingMessage",
  code: `
   $sendCrosspostingMessage[Hello!;$channelID;$randomChannelID]
  `,
});
```
