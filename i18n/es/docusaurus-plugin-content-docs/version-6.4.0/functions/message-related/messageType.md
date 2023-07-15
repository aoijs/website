---
title: '$messageType'
description: '$messageType will return the type of a given message.'
id: messageType
---

`$messageType` will return the type of a given message.

## Modo de uso

```php
$messageType[messageID?;channelID?]
```

## Parámetros

| Campo          | Tipo   | Parámetros                                         | Requerido |
| -------------- | ------ | -------------------------------------------------- |:---------:|
| ID de mensaje? | entero | ID of the message.                                 |    no     |
| canalID?       | entero | ID of the channel where the message is located in. |    no     |

## Ejemplo(s)

This will return the message type of the message which executed the command:

```javascript
bot.command({
    name: 'messageType',
    code: `
  $messageType[$messageID;$channelID]
  `
});
```
