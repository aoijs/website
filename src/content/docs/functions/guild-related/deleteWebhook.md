---
title: $deleteWebhook
description: $deleteWebhook will delete a given Webhook.
id: deleteWebhook
---

`$deleteWebhook` will delete a given Webhook.

## Usage

```php
$deleteWebhook[webhookID;webhookToken]
```

## Parameters

| Field        | Type    | Description               | Required |
| ------------ | ------- | ------------------------- | :------: |
| webhookID    | integer | The ID of the webhook.    |   true   |
| webhookToken | string  | The token of the webhook. |   true   |

## Example(s)

This will delete a webhook of your guild:

```javascript
bot.command({
  name: "deleteWebhook",
  code: `
  $deleteWebhook[webhookID;webhookToken]
  `, // replace the fields which the actual information.
});
```
