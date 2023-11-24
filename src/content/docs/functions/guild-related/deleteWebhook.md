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

| Field        | Type                                                                                              | Description               | Required |
| ------------ | ------------------------------------------------------------------------------------------------- | ------------------------- | :------: |
| webhookID    | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the webhook.    |   true   |
| webhookToken | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The token of the webhook. |   true   |

## Example(s)

This will delete a webhook of your guild:

```javascript
client.command({
  name: "deleteWebhook",
  code: `
  $deleteWebhook[webhookID;webhookToken]
  ` // replace the fields which the actual information.
});
```
