---
title: '$modifyWebhook'
description: '$modifyWebhook modificará un webhook determinado.'
id: modifyWebhook
---

`$modifyWebhook` modificará un webhook determinado.

## Uso

```php
$modifyWebhook[webhookID;nombre;avatar;canalID?;razon?]
```

## Parámetros

| Campo     | Tipo     | Parámetros                                                      | Requerido |
| --------- | -------- | --------------------------------------------------------------- |:---------:|
| webhookID | entero   | El ID de webhook para modificar.                                | verdadero |
| name      | consulta | Nuevo nombre de webhook.                                        | verdadero |
| avatar    | string   | Nuevo avatar de webhook.                                        | verdadero |
| canalID?  | entero   | ID del canal en el que se encuentra el webhook.                 |   falso   |
| ¿razón?   | cadena   | Razón que se mostrará en los registros de auditoría del gremio. |   falso   |

## Ejemplo(s)

Esto modificará un webhook existente y cambiará su avatar a su avatar de usuario:

```javascript
bot.command({
    name: 'modifyWebhook',
    code: `
  $modifyWebhook[webhookID;Hello!;$userAvatar[$authorID];$channelID;Testing!]
  `
});
```