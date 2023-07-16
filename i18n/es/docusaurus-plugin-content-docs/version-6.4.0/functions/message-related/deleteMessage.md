---
title: '$deleteMessage'
description: '$deleteMessage will delete a specific message.'
id: deleteMessage
---

`$deleteMessage` will delete a specific message.

## Uso

```php
$deleteMessage[messageID;channelID]
```

## Parámetros

| Campo         | Tipo   | Parámetros                                           | Requerido |
| ------------- | ------ | ---------------------------------------------------- |:---------:|
| ID de mensaje | entero | The message ID of the channel which will be deleted. | verdadero |
| canalID       | entero | The channel ID of where the message is located in.   |    no     |

## Ejemplo(s)

This will send and delete the sent message after 15 seconds ( we are using $let and $get to temporary store the message ID ):

```javascript
bot.command({
    name: 'deleteMessage',
    code: `
  $deleteMessage[$get[id];$channelID]
  $let[id;$sendMessage[Hello!;true]]
  `
});
```