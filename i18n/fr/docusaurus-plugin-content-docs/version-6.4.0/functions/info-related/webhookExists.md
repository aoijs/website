---
title: '$webhookExists'
description: '$webhookExists vérifiera si un webhook existe.'
id: webhookExists
---

`$webhookExists` vérifiera si un webhook existe.

## Utilisation

```php
$webhookExists[ID;token]
```

## Paramètres

| Champ | Type                 | Description             | Obligatoire |
| ----- | -------------------- | ----------------------- |:-----------:|
| ID    | entier               | Identifiant du Webhook. |    vrai     |
| token | chaîne de caractères | Token du webhook.       |    vrai     |

## Exemple(s)

Cela vérifiera si le Webhook existe :

```javascript
bot.command({
    name: 'webhookExists',
    code: `
  
  $webhookExists[$splitText[1];$splitText[2]]
  $textSplit[$createWebhook[$channelID;aoi.js est génial;$userAvatar[$authorID];Simplement entrain de tester.;, ];, ]
  `
});
```
