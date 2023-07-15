---
title: '$sendWebhookMessage'
description: '$sendWebhookMessage will send a message using an existing webhook.'
id: sendWebhookMessage
---

`$sendWebhookMessage` will send a message using an existing webhook.

## Використання

```php
$sendWebhookMessage[webhookID;webhookToken;content;returnID?]
```

## Параметри

| Поле         | Тип     | Опис                                                                             | Обов'язковий |
| ------------ | ------- | -------------------------------------------------------------------------------- |:------------:|
| webhookID    | integer | The webhook ID.                                                                  |     так      |
| webhookToken | рядок   | The webhook Token.                                                               |     так      |
| content      | рядок   | The content of the message to send.                                              |     так      |
| returnID?    | boolean | Return message ID?  <br /> 1. **true** <br /> 2. **false** (default) |      ні      |

## Приклад(и)

This will create a webhook and send a message using it:

```javascript
bot.command({
    name: 'sendWebhookMessage',
    code: `
   $sendWebhookMessage[$splitText[1];$splitText[2];Hello!;false]
   $textSplit[$createWebhook[$channelID;$username;$userAvatar;Testing!;,];,]
  ` /* Using $textSplit to split the ID and Token in separate parts to use it in sendWebhookMessage
  $splitText[1] equals the webhook ID 
  $splitText[2] equals the webhook Token
  */
});
```