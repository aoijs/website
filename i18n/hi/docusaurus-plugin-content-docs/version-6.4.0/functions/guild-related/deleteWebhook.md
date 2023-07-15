---
title: '$deleteWebhook'
description: '$deleteWebhook will delete a given Webhook.'
id: deleteWebhook
---

`$deleteWebhook` will delete a given Webhook.

## प्रोयोग

```php
$deleteWebhook[webhookID;webhookToken]
```

## पैरामीटर्स

| फील्ड        | टाइप     | डिस्क्रिप्शन              | चाहिए |
| ------------ | -------- | ------------------------- |:-----:|
| webhookID    | integer  | The ID of the webhook.    | true  |
| webhookToken | स्ट्रिंग | The token of the webhook. | true  |

## ट्रू (हा)

This will delete a webhook of your guild:

```javascript
bot.command({
    name: 'deleteWebhook',
    code: `
  $deleteWebhook[webhookID;webhookToken]
  ` // replace the fields which the actual information.
});
```