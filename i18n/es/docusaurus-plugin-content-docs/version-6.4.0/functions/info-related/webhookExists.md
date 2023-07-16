---
title: '$webhookExists'
description: '$webhookExists comprobará si un webhook dado existe.'
id: webhookExists
---

`$webhookExists` comprobará si un webhook dado existe.

## Uso

```php
$webhookExists[id;token]
```

## Parámetros

| Campo | Tipo     | Parámetros         | Requerido |
| ----- | -------- | ------------------ |:---------:|
| id    | entero   | ID del webhook.    | verdadero |
| token | consulta | Token del webhook. | verdadero |

## Ejemplo(s)

Esto comprobará si el webhook dado existe:

```javascript
bot.command({
    name: 'webhookExists',
    code: `
  $webhookExists[$splitText[1];$splitText[2]]
  $textSplit[$createWebhook[$channelID;aoi.js es genial;$userAvatar[$authorID];Sólo probando.;, ];, ]
  `
});
```
