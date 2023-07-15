---
title: '$messageWebhookID'
description: '$messageWebhookID will return the ID of the webhook which sent the given message.'
id: messageWebhookID
---

`$messageWebhookID` will return the ID of the webhook which sent the given message.

## प्रोयोग

```php
$messageWebhookID[messageID?;channelID?]
```

## पैरामीटर्स

| फील्ड      | टाइप    | डिस्क्रिप्शन                                       |    चाहिए     |
| ---------- | ------- | -------------------------------------------------- |:------------:|
| messageID? | integer | ID of the message.                                 | असत्य (नहीं) |
| channelID? | integer | ID of the message where the message is located in. | असत्य (नहीं) |

## ट्रू (हा)

This will return the ID of a webhook, make sure to replace "messageID" with an actual message ID sent from a webhook:

```javascript
bot.command({
    name: 'messageWebhookID',
    code: `
  $messageWebhookID[messageID;$channelID] //replace messageID
  `
});
```
