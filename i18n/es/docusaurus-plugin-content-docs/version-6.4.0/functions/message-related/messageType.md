---
title: '$messageType'
description: '$messageType devolverá el tipo de un mensaje dado.'
id: messageType
---

`$messageType` devolverá el tipo de un mensaje dado.

## Uso

```php
$messageType[ID de mensaje;canalID?]
```

## Parámetros

| Campo          | Tipo   | Parámetros                                      | Requerido |
| -------------- | ------ | ----------------------------------------------- |:---------:|
| ID de mensaje? | entero | ID del mensaje.                                 |   falso   |
| canalID?       | entero | ID del canal en el que se encuentra el mensaje. |   falso   |

## Ejemplo(s)

Esto devolverá el ID de categoría del canal de texto en el que ejecute el comando:

```javascript
bot.command({
    name: 'messageType',
    code: `
  $messageType[$messageID;$channelID]
  `
});
```
