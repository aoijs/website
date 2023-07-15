---
title: '$editWebhookMessage'
description: '$editWebhookMessage will edit a given webhook message.'
id: editWebhookMessage
---

`$editWebhookMessage` will edit a given webhook message.

## الاستخدام

```php
$editWebhookMessage[webhookID;webhookToken;messageID;content]
```

## البارامترات

| Field        | النوع   | الديسكبربشين             | مطلوب |
| ------------ | ------- | ------------------------ |:-----:|
| webhookID    | Integer | Webhook ID.              | true  |
| webhookToken | string  | The Webhook Token.       | true  |
| messageID    | Integer | The message ID to edit.  | true  |
| content      | string  | The new message content. | true  |