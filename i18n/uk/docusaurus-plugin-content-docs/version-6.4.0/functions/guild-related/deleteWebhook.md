---
title: '$deleteWebhook'
description: '$deleteWebhook will delete a given Webhook.'
id: deleteWebhook
---

`$deleteWebhook` will delete a given Webhook.

## Використання

```php
$deleteWebhook[webhookID;webhookToken]
```

## Параметри

| Поле         | Тип     | Опис                      | Обов'язковий |
| ------------ | ------- | ------------------------- |:------------:|
| webhookID    | integer | The ID of the webhook.    |     так      |
| webhookToken | рядок   | The token of the webhook. |     так      |

## Приклад(и)

This will delete a webhook of your guild:

```javascript
bot.command({
    name: 'deleteWebhook',
    code: `
  $deleteWebhook[webhookID;webhookToken]
  ` // replace the fields which the actual information.
});
```