---
title: '$deleteWebhook'
description: '$deleteWebhook will delete a given Webhook.'
id: deleteWebhook
---

`$deleteWebhook` will delete a given Webhook.

## Modo de uso

```php
$deleteWebhook[webhookID;webhookToken]
```

## Parámetros

| Campo        | Tipo     | Parámetros                | Requerido |
| ------------ | -------- | ------------------------- |:---------:|
| webhookID    | entero   | The ID of the webhook.    | verdadero |
| webhookToken | consulta | The token of the webhook. | verdadero |

## Ejemplo(s)

This will delete a webhook of your guild:

```javascript
bot.command({
    name: 'deleteWebhook',
    code: `
  $deleteWebhook[webhookID;webhookToken]
  ` // replace the fields which the actual information.
});
```