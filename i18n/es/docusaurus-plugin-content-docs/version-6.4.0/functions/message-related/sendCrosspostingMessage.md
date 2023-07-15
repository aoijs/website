---
title: '$sendCrosspostingMessage'
description: '$sendCrosspostingMessage will crosspost a given message to the given channels.'
id: sendCrosspostingMessage
---

`$sendCrosspostingMessage` will crosspost a given message to the given channels.

## Modo de uso

```php
$sendCrosspostingMessage[content;...channelIDs]
```

## Parámetros

| Campo         | Tipo     | Parámetros                       | Requerido |
| ------------- | -------- | -------------------------------- |:---------:|
| contenido     | consulta | The message to send.             | verdadero |
| ...channelIDs | entero   | Where to send the given message. | verdadero |

## Ejemplo(s)

This will crosspost a message to multiple channels in your server:

```javascript
bot.command({
    name: 'sendCrosspostingMessage',
    code: `
   $sendCrosspostingMessage[Hello!;$channelID;$randomChannelID]
  `
});
```
