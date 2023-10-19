---
title: $sendWebhookMessage
description: $sendWebhookMessage will send a message using an existing webhook.
id: sendWebhookMessage
---

`$sendWebhookMessage` will send a message using an existing webhook.

## Usage

```php
$sendWebhookMessage[webhookID;webhookToken;content;returnID?]
```

## Parameters

| Field                                        | Type                                                                                                | Description                         | Required |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------- | ----------------------------------- | :------: |
| webhookID                                    | integer                                                                                             | The webhook ID.                     |   true   |
| webhookToken                                 | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The webhook Token.                  |   true   |
| content                                      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The content of the message to send. |   true   |
| returnID?                                    | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) |
| JavaScript/Reference/Global_Objects/Boolean) | Return message ID? <br /> 1. **true** <br /> 2. **false** (default)                                 | false                               |

## Example(s)

This will create a webhook and send a message using it:

```javascript
client.command({
  name: "sendWebhookMessage",
  code: `
   $sendWebhookMessage[$splitText[1];$splitText[2];Hello!;false]
   $textSplit[$createWebhook[$channelID;$username;$userAvatar;Testing!;,];,]
  ` /* Using $textSplit to split the ID and Token in separate parts to use it in sendWebhookMessage
  $splitText[1] equals the webhook ID 
  $splitText[2] equals the webhook Token
  */,
});
```
