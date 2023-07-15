---
title: '$editWebhookMessage'
description: '$editWebhookMessage will edit a given webhook message.'
id: editWebhookMessage
---

`$editWebhookMessage` will edit a given webhook message.

## प्रोयोग

```php
$editWebhookMessage[webhookID;webhookToken;messageID;content]
```

## पैरामीटर्स

| फील्ड        | टाइप     | डिस्क्रिप्शन             | चाहिए |
| ------------ | -------- | ------------------------ |:-----:|
| webhookID    | integer  | Webhook ID.              | true  |
| webhookToken | स्ट्रिंग | The Webhook Token.       | true  |
| messageID    | integer  | The message ID to edit.  | true  |
| content      | स्ट्रिंग | The new message content. | true  |