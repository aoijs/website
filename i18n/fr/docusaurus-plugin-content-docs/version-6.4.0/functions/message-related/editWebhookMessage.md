---
title: '$editWebhookMessage'
description: '$editWebhookMessage will edit a given webhook message.'
id: editWebhookMessage
---

`$editWebhookMessage` will edit a given webhook message.

## Usage

```php
$editWebhookMessage[webhookID;webhookToken;messageID;content]
```

## Parameters

| Field        | Type    | Description              | Required |
| ------------ | ------- | ------------------------ |:--------:|
| webhookID    | integer | Webhook ID.              |   true   |
| webhookToken | string  | The Webhook Token.       |   true   |
| messageID    | integer | The message ID to edit.  |   true   |
| content      | string  | The new message content. |   true   |