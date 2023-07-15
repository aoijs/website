---
title: '$createWebhook'
description: '$createWebhook will create a webhook.'
id: createWebhook
---

`$createWebhook` will create a webhook.

## Modo de uso

```php
$createWebhook[channelID;name;avatar;reason;sep?]
```

## Parámetros

| Campo   | Tipo     | Parámetros                                                                                         | Requerido |
| ------- | -------- | -------------------------------------------------------------------------------------------------- |:---------:|
| canalID | entero   | Channel ID of where the webhook will be created in.                                                | verdadero |
| name    | consulta | The webhook's display name.                                                                        | verdadero |
| avatar  | string   | The webhook avatar url.                                                                            |    sí     |
| ¿razón? | string   | Reason which will be displayed in the guild's audit logs.                                          |    sí     |
| sep?    | cadena   | The separator which will be used to separate important credentials like token and ID, default `,`. |    no     |

## Ejemplo(s)

This will create a webhook in the current channel:

```javascript
bot.command({
    name: 'createWebhook',
    code: `
  $createWebhook[$channelID;aoi.js is great;$userAvatar[$authorID];Just testing.;, ]
  `
});
```
