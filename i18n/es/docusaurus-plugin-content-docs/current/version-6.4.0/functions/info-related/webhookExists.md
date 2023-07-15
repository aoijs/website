---
title: '$webhookExists'
description: '$webhookExists will check if a given webhook exists.'
id: webhookExists
---

`$webhookExists` will check if a given webhook exists.

## Modo de uso

```php
$webhookExists[id;token]
```

## Parámetros

| Campo | Tipo     | Parámetros     | Requerido |
| ----- | -------- | -------------- |:---------:|
| id    | entero   | Webhook ID.    | verdadero |
| token | consulta | Webhook token. | verdadero |

## Ejemplo(s)

This will check if the given Webhook Exists:

```javascript
bot.command({
    name: 'webhookExists',
    code: `
  $webhookExists[$splitText[1];$splitText[2]]
  $textSplit[$createWebhook[$channelID;aoi.js is great;$userAvatar[$authorID];Just testing.;, ];, ]
  `
});
```
