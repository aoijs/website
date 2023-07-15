---
title: '$sendWebhookMessage'
description: '$sendWebhookMessage will send a message using an existing webhook.'
id: sendWebhookMessage
---

`$sendWebhookMessage` will send a message using an existing webhook.

## الاستخدام

```php
$sendWebhookMessage[webhookID;webhookToken;content;returnID?]
```

## البارامترات

| Field        | النوع   | الديسكبربشين                                              | مطلوب |
| ------------ | ------- | --------------------------------------------------------- |:-----:|
| webhookID    | Integer | The webhook ID.                                           | true  |
| webhookToken | string  | The webhook Token.                                        | true  |
| content      | string  | The content of the message to send.                       | true  |
| returnID?    | boolean | Return message ID?  <br /> 1. true. false (default) | false |

## مثال

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