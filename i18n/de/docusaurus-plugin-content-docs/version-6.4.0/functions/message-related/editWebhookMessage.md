---
title: $editWebhookMessage
description: '$editWebhookMessage wird eine bestimmte Webhook Nachricht bearbeiten.'
id: editWebhookMessage
---

`$editWebhookMessage` wird eine bestimmte Webhook Nachricht bearbeiten.

## Verwendung

```php
$editWebhookMessage[webhookID;webhookToken;messageID;content]
```

## Verwendung

| Feld          | Typ        | Beschreibung                        | Erforderlich |
| ------------- | ---------- | ----------------------------------- |:------------:|
| webhookID     | ganze Zahl | Webhook-ID.                         |     wahr     |
| webhookToken  | string     | Der Webhook Token.                  |     wahr     |
| nachrichtenID | ganze Zahl | Die zu bearbeitende Nachrichten-ID. |     wahr     |
| inhalt        | string     | Der neue Nachrichteninhalt.         |     wahr     |