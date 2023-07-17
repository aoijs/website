---
title: '$modifyWebhook'
description: '$modifyWebhook ändert einen bestimmten Webhook.'
id: modifyWebhook
---

`$modifyWebhook` ändert einen bestimmten Webhook.

## Verwendung

```php
$modifyWebhook[webhookID;name;avatar;channelID?;reason?]
```

## Verwendung

| Feld       | Typ        | Beschreibung                                           | Erforderlich |
| ---------- | ---------- | ------------------------------------------------------ |:------------:|
| webhookID  | ganze Zahl | Die zu ändernde Webhook-ID.                            |     wahr     |
| name       | string     | Neuer Webhook Name.                                    |     wahr     |
| avatar     | string     | Neuer Webhook Avatar.                                  |     wahr     |
| channelID? | ganze Zahl | ID des Kanals, in dem sich der Webhook befindet.       |    falsch    |
| warum?     | string     | Begründung, die im Audit-Log der Gilde angezeigt wird. |    falsch    |

## Beispiel(e)

Hiermit wird ein existierender Webhook geändert und der Avatar wird in Ihrem Avatar geändert:

```javascript
bot.command({
    Name: 'modifyWebhook',
    Code: `
  $modifyWebhook[webhookID;Hello!;$userAvatar[$authorID];$channelID;Testen!]
  `
});
```