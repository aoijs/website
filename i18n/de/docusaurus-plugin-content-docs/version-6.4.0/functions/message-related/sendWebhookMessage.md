---
title: '$sendWebhookMessage'
description: '$sendWebhookMessage wird eine Nachricht mit einem vorhandenen Webhook senden.'
id: sendWebhookMessage
---

`$sendWebhookMessage` wird eine Nachricht mit einem vorhandenen Webhook senden.

## Verwendung

```php
$sendWebhookMessage[webhookID;webhookToken;content;returnID?]
```

## Verwendung

| Feld         | Typ        | Beschreibung                                                                             | Erforderlich |
| ------------ | ---------- | ---------------------------------------------------------------------------------------- |:------------:|
| webhookID    | ganze Zahl | Die Webhook-ID.                                                                          |     wahr     |
| webhookToken | string     | Der Webhook Token.                                                                       |     wahr     |
| inhalt       | string     | Der Inhalt der zu sendenden Nachricht.                                                   |     wahr     |
| return ID?   | boolean    | Rücksende-Nachrichten-ID?  <br /> 1. **true** <br /> 2. **false** (Standard) |    falsch    |

## Beispiel(e)

Dies wird einen Webhook erstellen und eine Nachricht mit folgenden verwenden:

```javascript
bot.command({
    name: 'sendWebhookMessage',
    code: `
   $sendWebhookMessage[$splitText[1];$splitText[2];Hallo! falsch]
   $textSplit[$createWebhook[$channelID;$username;$userAvatar;Testing!;,]; ]
  ` /* Benutze $textSplit um die ID und das Token in separaten Teilen zu teilen, um sie in der sendWebhookMessage
  $splitText[1] zu verwenden, entspricht der Webhook-ID 
  $splitText[2] dem Webhook-Token
  */
});
```