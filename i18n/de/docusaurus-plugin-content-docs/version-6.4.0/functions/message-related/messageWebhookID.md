---
title: '$messageWebhookID'
description: '$messageWebhookID wird die ID des Webhook zurückgeben, der die Nachricht gesendet hat.'
id: messageWebhookID
---

`$messageWebhookID` gibt die ID des Webhook zurück, der die Nachricht gesendet hat.

## Verwendung

```php
$messageWebhookID[messageID?;channelID?]
```

## Verwendung

| Feld           | Typ        | Beschreibung                                          | Erforderlich |
| -------------- | ---------- | ----------------------------------------------------- |:------------:|
| nachrichtenID? | ganze Zahl | ID der Nachricht.                                     |    falsch    |
| channelID?     | ganze Zahl | ID der Nachricht, in der sich die Nachricht befindet. |    falsch    |

## Beispiel(e)

Dadurch wird die ID eines Webhooks zurückgegeben, stellen Sie sicher, dass Sie "messageID" durch eine tatsächliche Nachrichten-ID eines Webhooks ersetzen:

```javascript
bot.command({
    Name: 'messageWebhookID',
    Code: `
  $messageWebhookID[messageID;$channelID] //Ersetze messageID
  `
});
```
