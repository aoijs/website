---
title: '$createWebhook'
description: '$createWebhook wird einen Webhook erstellen.'
id: createWebhook
---

`$createWebhook` wird einen Webhook erstellen.

## Verwendung

```php
$createWebhook[channelID;name;avatar;reason;sep?]
```

## Verwendung

| Feld      | Typ        | Beschreibung                                                                                    | Erforderlich |
| --------- | ---------- | ----------------------------------------------------------------------------------------------- |:------------:|
| channelID | ganze Zahl | Kanal-ID, wo der Webhook erstellt wird.                                                         |     wahr     |
| name      | string     | Der Anzeigename des Webhooks.                                                                   |     wahr     |
| avatar    | string     | Die Webhook Avatar Url.                                                                         |     wahr     |
| Grund     | string     | Begründung, die in den Audit-Protokollen der Gilde angezeigt wird.                              |     wahr     |
| sep?      | string     | Das Trennzeichen, mit dem wichtige Zugangsdaten wie Token und ID, Standard `,` getrennt werden. |    falsch    |

## Beispiel(e)

Hiermit wird ein Webhook im aktuellen Kanal erstellt:

```javascript
bot.command({
    name: 'createWebhook',
    code: `
  $createWebhook[$channelID;aoi.js is great;$userAvatar[$authorID];Nur testing.;, ]
  `
});
```
