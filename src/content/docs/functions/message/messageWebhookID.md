---
title: $messageWebhookID
description: $messageWebhookID will return the ID of the webhook which sent the given message.
id: messageWebhookID
---

`$messageWebhookID` will return the ID of the webhook which sent the given message.

## Usage

```aoi
$messageWebhookID[messageID?;channelID?]
```

## Parameters

| Field      | Type                                                                                              | Description                                        | Required |
| ---------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------- | :------: |
| messageID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | ID of the message.                                 |  false   |
| channelID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | ID of the message where the message is located in. |  false   |

## Example(s)

This will return the ID of a webhook, make sure to replace "messageID" with an actual message ID sent from a webhook:

```javascript
client.command({
    name: "messageWebhookID",
    code: `
  $messageWebhookID[messageID;$channelID] //replace messageID
  `
});
```
