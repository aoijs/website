---
title: '$messageWebhookID'
description: '$messageWebhookID will return the ID of the webhook which sent the given message.'
id: messageWebhookID
---

`$messageWebhookID` will return the ID of the webhook which sent the given message.

## الاستخدام

```php
$messageWebhookID[messageID?;channelID?]
```

## البارامترات

| Field      | النوع   | الديسكبربشين                                       | مطلوب |
| ---------- | ------- | -------------------------------------------------- |:-----:|
| messageID? | Integer | ID of the message.                                 | false |
| channelID? | Integer | ID of the message where the message is located in. | false |

## مثال

This will return the ID of a webhook, make sure to replace "messageID" with an actual message ID sent from a webhook:

```javascript
bot.command({
    name: 'messageWebhookID',
    code: `
  $messageWebhookID[messageID;$channelID] //replace messageID
  `
});
```
