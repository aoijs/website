---
title: $messageExists
description: $messageExists will check if a specific message exists.
id: messageExists
---

`$messageExists` will check if a specific message exists.

## Usage

```php
$messageExists[messageID;channelID?]
```

## Parameters

| Field      | Type                                                                                              | Description                                 | Required |
| ---------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------- | -------- |
| messageID  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | the id of the message                       | true     |
| channelID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | the channel id where the message is located | false    |

## Example(s)

This will return `false` as the message doesn't exist in the given channel:

```javascript
client.command({
  name: "messageExists",
  code: `
  $messageExists[1058998634823299143;$channelID]
  `
});
```
