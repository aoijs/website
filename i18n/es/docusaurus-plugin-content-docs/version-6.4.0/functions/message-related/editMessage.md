---
title: '$editMessage'
description: '$editMessage will edit a given message.'
id: editMessage
---

`$editMessage` will edit a given message.

## Uso

```php
$editMessage[messageID;content;channelID?]
```

## Parámetros

| Campo         | Tipo     | Parámetros                                         | Requerido |
| ------------- | -------- | -------------------------------------------------- |:---------:|
| ID de mensaje | entero   | The message that should be edited.                 | verdadero |
| contenido     | consulta | The content of the new message.                    | verdadero |
| canalID?      | entero   | The channel ID of where the message is located in. |   falso   |

You can only edit messages that were sent by the bot itself.

## Ejemplo(s)

This will edit the sent message after five seconds: ( works the same way as `$editIn` )

```javascript
bot.command({
    name: 'editMessage',
    code: `
  $editMessage[$get[id];Bye!]
  $wait[5s]
  $let[id;$sendMessage[Hello!;true]]
  `
});
```