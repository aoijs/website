---
title: '$deleteWebhook'
description: '$deleteWebhook will delete a given Webhook.'
id: deleteWebhook
---

`$deleteWebhook` will delete a given Webhook.

## الاستخدام

```php
$deleteWebhook[webhookID;webhookToken]
```

## البارامترات

| Field        | النوع   | الديسكبربشين              | مطلوب |
| ------------ | ------- | ------------------------- |:-----:|
| webhookID    | Integer | The ID of the webhook.    | true  |
| webhookToken | string  | The token of the webhook. | true  |

## مثال

This will delete a webhook of your guild:

```javascript
bot.command({
    name: 'deleteWebhook',
    code: `
  $deleteWebhook[webhookID;webhookToken]
  ` // replace the fields which the actual information.
});
```