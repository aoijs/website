---
title: '$pinMessage'
description: '$pinMessage will pin a given message.'
id: pinMessage
---

`$pinMessage` will pin a given message.

## Uso

```php
$pinMessage[messageID?;channelID?]
```

## Parámetros

| Campo         | Tipo   | Parámetros                                         | Requerido |
| ------------- | ------ | -------------------------------------------------- |:---------:|
| ID de mensaje | entero | The ID of the message that will be pinned.         |    no     |
| canalID       | entero | The channel ID of where the message is located in. |    no     |

## Ejemplo(s)

This will pin the bot's message:

```javascript
bot.command({
    name: 'pinMessage',
    code: `
  $pinMessage[$get[id]]
  $let[id;$sendMessage[Hello!;true]
  ` // using $let & $get to save the message ID
});
```