---
title: '$editWebhookMessage'
description: '$editWebhookMessage will edit a given webhook message.'
id: editWebhookMessage
---

`$editWebhookMessage` will edit a given webhook message.

## Використання

```php
$editWebhookMessage[webhookID;webhookToken;messageID;content]
```

## Параметри

| Поле         | Тип     | Опис                     | Обов'язковий |
| ------------ | ------- | ------------------------ |:------------:|
| webhookID    | integer | Webhook ID.              |     так      |
| webhookToken | рядок   | The Webhook Token.       |     так      |
| messageID    | integer | The message ID to edit.  |     так      |
| content      | рядок   | The new message content. |     так      |