---
title: $editWebhookMessage
description: $editWebhookMessage will edit a given webhook message.
id: editWebhookMessage
---

`$editWebhookMessage` will edit a given webhook message.

## Usage

```php
$editWebhookMessage[webhookID;webhookToken;messageID;content]
```

## Parameters

| Field        | Type                                                                                                | Description              | Required |
| ------------ | --------------------------------------------------------------------------------------------------- | ------------------------ | :------: |
| webhookID    | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | Webhook ID.              |   true   |
| webhookToken | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The Webhook Token.       |   true   |
| messageID    | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | The message ID to edit.  |   true   |
| content      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The new message content. |   true   |
