---
title: '$sendTTS'
description: '$sendTTS will send a text-to-speech message in a given channel.'
id: sendTTS
---

`$sendTTS` will send a text-to-speech message in a given channel.

## Modo de uso

```php
$sendTTS[channelID;message;returnID?]
```

## Parámetros

| Campo     | Tipo     | Parámetros                                                                           | Requerido |
| --------- | -------- | ------------------------------------------------------------------------------------ |:---------:|
| canalID   | entero   | The ID of the channel where the Text-To-Speech message will be sent.                 | verdadero |
| message   | consulta | The content of the TTS message.                                                      | verdadero |
| returnID? | booleano | Return message ID?  <br /> 1. **true** <br /> 2. **false** (por defecto) |   falso   |

## Ejemplo(s)

This will send a TTS message in the current channel:

```javascript
bot.command({
    name: 'sendTTS',
    code: `
   $sendTTS[$channelIDHello!;false]
  `
});
```