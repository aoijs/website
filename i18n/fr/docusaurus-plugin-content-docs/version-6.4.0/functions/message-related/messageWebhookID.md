---
title: '$messageWebhookID'
description: '$messageWebhookID will return the ID of the webhook which sent the given message.'
id: messageWebhookID
---

`$messageWebhookID` will return the ID of the webhook which sent the given message.

## Usage

```php
$messageWebhookID[messageID?;channelID?]
```

## Parameters

| Field      | Type    | Description                                        | Required |
| ---------- | ------- | -------------------------------------------------- |:--------:|
| messageID? | integer | ID of the message.                                 |  false   |
| channelID? | integer | ID of the message where the message is located in. |  false   |

## Example(s)

This will return the ID of a webhook, make sure to replace "messageID" with an actual message ID sent from a webhook:

```javascript
bot.command({
    name: 'messageWebhookID',
    code: `
  $messageWebhookID[messageID;$channelID] //replace messageID
  `
});
```
