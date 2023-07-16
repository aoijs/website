---
title: '$messageWebhookID'
description: '$messageWebhookID devolverá el ID del webhook que envió el mensaje dado.'
id: messageWebhookID
---

`$messageWebhookID` devolverá la ID del webhook que envió el mensaje dado.

## Uso

```php
$messageWebhookID[ID de mensaje;canalID?]
```

## Parámetros

| Campo          | Tipo   | Parámetros                                    | Requerido |
| -------------- | ------ | --------------------------------------------- |:---------:|
| ID de mensaje? | entero | ID del mensaje.                               |   falso   |
| canalID?       | entero | ID del mensaje donde se encuentra el mensaje. |   falso   |

## Ejemplo(s)

Esto devolverá la ID de un webhook, asegúrese de reemplazar "messageID" con una ID de mensaje real enviada desde un webhook:

```javascript
bot.command({
    name: 'messageWebhookID',
    code: `
  $messageWebhookID[messageID;$channelID] //reemplazar ID de mensaje
  `
});
```
