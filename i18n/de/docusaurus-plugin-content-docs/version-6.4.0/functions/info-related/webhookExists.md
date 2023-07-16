---
title: $webhookExists
description: '$webhookExists wird prüfen, ob ein bestimmter Webhook existiert.'
id: webhookExists
---

`$webhookExists` wird überprüfen, ob ein bestimmter Webhook existiert.

## Verwendung

```php
$webhookExists[id;token]
```

## Verwendung

| Feld  | Typ        | Beschreibung   | Erforderlich |
| ----- | ---------- | -------------- |:------------:|
| id    | ganze Zahl | Webhook-ID.    |     wahr     |
| token | string     | Webhook-Token. |     wahr     |

## Beispiel(e)

Wird überprüft, ob der angegebene Webhook existiert:

```javascript
bot.command({
    name: 'webhookExists',
    code: `
  $webhookExists[$splitText[1];$splitText[2]]
  $textSplit[$createWebhook[$channelID;aoi.js is great;$userAvatar[$authorID];Nur testing.;, ];, ]
  `
});
```
