---
title: $messageURL
description: $messageURL will return the URL of a given message.
id: messageURL
---

`$messageURL` will return the URL of a given message.

## Usage

```php
$messageURL[messageID?;channelID?]
```

## Parameters

| Field      | Type                                                                                                | Description                                        | Required |
| ---------- | --------------------------------------------------------------------------------------------------- | -------------------------------------------------- | :------: |
| messageID? | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | ID of the message.                                 |  false   |
| channelID? | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | ID of the message where the message is located in. |  false   |

## Example(s)

This will return the message URL of the message which executed the command:

```javascript
client.command({
  name: "messageURL",
  code: `
  $messageURL[$messageID;$channelID]
  `,
});
```
