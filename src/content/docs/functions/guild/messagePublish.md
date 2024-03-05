---
title: $messagePublish
description: $messagePublish will publish a message in an announcement channel.
id: messagePublish
---

`$messagePublish` will publish a message in an announcement channel.

## Usage

```php
$messagePublish[messageID;channelID?]
```

## Parameters

| Field      | Type                                                                                              | Description                                                  | Required |
| ---------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | :------: |
| messageID  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the message which should be published.             |   true   |
| channelID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the channel where the given message is located in. |  false   |

## Example(s)

This will publish a message ( will only work in announcement channels ):

```javascript
client.command({
  name: "messagePublish",
  code: `
  $messagePublish[$get[msgID];$channelID]
  $let[msgID;$sendMessage[Hello!;true]]
  `
});
```
