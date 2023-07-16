---
title: '$messageURL'
description: '$messageURL devolverá la URL de un mensaje determinado.'
id: messageURL
---

`$messageURL` devolverá la URL de un mensaje dado.

## Uso

```php
$messageURL[ID de mensaje;canalID?]
```

## Parámetros

| Campo          | Tipo   | Parámetros                                      | Requerido |
| -------------- | ------ | ----------------------------------------------- |:---------:|
| ID de mensaje? | entero | ID del mensaje.                                 |   falso   |
| canalID?       | entero | ID del canal en el que se encuentra el mensaje. |   falso   |

## Ejemplo(s)

Esto devolverá el URL del mensaje del mensaje que ejecutó el comando:

```javascript
bot.command({
    name: 'messageURL',
    code: `
  $messageURL[$messageID;$channelID]
  `
});
```
