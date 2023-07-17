---
title: '$deleteWebhook'
description: '$deleteWebhook löscht einen bestimmten Webhook.'
id: deleteWebhook
---

`$deleteWebhook` löscht einen bestimmten Webhook.

## Verwendung

```php
$deleteWebhook[webhookID;webhookToken]
```

## Verwendung

| Feld         | Typ        | Beschreibung           | Erforderlich |
| ------------ | ---------- | ---------------------- |:------------:|
| webhookID    | ganze Zahl | Die ID des Webhook.    |     wahr     |
| webhookToken | string     | Das Token des Webhook. |     wahr     |

## Beispiel(e)

Dies löscht einen Webhook deiner Gilde:

```javascript
bot.command({
    name: 'deleteWebhook',
    code: `
  $deleteWebhook[webhookID;webhookToken]
  ` // die Felder, die die tatsächlichen Informationen ersetzen, ersetzen.
});
```