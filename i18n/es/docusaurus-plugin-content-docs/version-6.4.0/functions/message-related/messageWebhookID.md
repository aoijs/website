---
title: '$messageWebhookID'
description: '$messageWebhookID will return the ID of the webhook which sent the given message.'
id: messageWebhookID
---

`$messageWebhookID` will return the ID of the webhook which sent the given message.

## Modo de uso

```php
$messageWebhookID[messageID?;channelID?]
```

## Parámetros

| Campo          | Tipo   | Parámetros                                         | Requerido |
| -------------- | ------ | -------------------------------------------------- |:---------:|
| ID de mensaje? | entero | ID of the message.                                 |    no     |
| canalID?       | entero | ID of the message where the message is located in. |    no     |

## Ejemplo(s)

This will return the ID of a webhook, make sure to replace "messageID" with an actual message ID sent from a webhook:

```javascript
bot.command({
    name: 'messageWebhookID',
    code: `
  $messageWebhookID[messageID;$channelID] //replace messageID
  `
});
```
