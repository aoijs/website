---
title: '$modifyWebhook'
description: '$modifyWebhook will modify a given webhook.'
id: modifyWebhook
---

`$modifyWebhook` will modify a given webhook.

## Modo de uso

```php
$modifyWebhook[webhookID;name;avatar;channelID?;reason?]
```

## Parámetros

| Campo     | Tipo     | Parámetros                                                      | Requerido |
| --------- | -------- | --------------------------------------------------------------- |:---------:|
| webhookID | entero   | The webhook ID to modify.                                       | verdadero |
| name      | consulta | New webhook name.                                               | verdadero |
| avatar    | string   | New webhook avatar.                                             |    sí     |
| canalID?  | entero   | ID of the channel where the webhook is located in.              |   falso   |
| ¿razón?   | cadena   | Razón que se mostrará en los registros de auditoría del gremio. |    no     |

## Ejemplo(s)

This will modify a existing webhook and change it's avatar to your user avatar:

```javascript
bot.command({
    name: 'modifyWebhook',
    code: `
  $modifyWebhook[webhookID;Hello!;$userAvatar[$authorID];$channelID;Testing!]
  `
});
```