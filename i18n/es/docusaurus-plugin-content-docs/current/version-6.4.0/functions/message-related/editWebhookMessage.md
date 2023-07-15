---
title: '$editWebhookMessage'
description: '$editWebhookMessage will edit a given webhook message.'
id: editWebhookMessage
---

`$editWebhookMessage` will edit a given webhook message.

## Modo de uso

```php
$editWebhookMessage[webhookID;webhookToken;messageID;content]
```

## Parámetros

| Campo         | Tipo     | Parámetros               | Requerido |
| ------------- | -------- | ------------------------ |:---------:|
| webhookID     | entero   | Webhook ID.              | verdadero |
| webhookToken  | consulta | The Webhook Token.       | verdadero |
| ID de mensaje | entero   | The message ID to edit.  |    sí     |
| contenido     | string   | The new message content. |    sí     |