---
title: '$unPinMessage'
description: '$unPinMessage will unpin a given message.'
id: unPinMessage
---

`$unPinMessage` will unpin a given message.

## Modo de uso

```php
$unPinMessage[messageID?;channelID?]
```

## Parámetros

| Campo         | Tipo   | Parámetros                                                | Requerido |
| ------------- | ------ | --------------------------------------------------------- |:---------:|
| ID de mensaje | entero | The ID of the message to unpin.                           |    no     |
| canalID       | entero | The ID of the channel of where the message is located in. |    no     |

## Ejemplo(s)

This will pin the bot's message and unpin it after two seconds:

```javascript
bot.command({
    name: 'unPinMessage',
    code: `
  $unPinMessage[$get[id]]
  $wait[2s]
  $pinMessage[$get[id]]
  $let[id;$sendMessage[Hello!;true]
  ` // using $let & $get to save the message ID
});
```