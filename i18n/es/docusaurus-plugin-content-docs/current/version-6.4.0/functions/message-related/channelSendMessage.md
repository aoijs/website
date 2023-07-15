---
title: '$channelSendMessage'
description: '$channelSendMessage will send a message in a specific channel.'
id: channelSendMessage
---

`$channelSendMessage` will send a message in a specific channel.

## Modo de uso

```php
$channelSendMessage[channelID;content;returnID?]
```

## Parámetros

| Campo     | Tipo     | Parámetros                                                                                                    | Requerido |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------- |:---------:|
| canalID   | entero   | Where the messages shall be sent to.                                                                          | verdadero |
| contenido | consulta | What the content of the message should be.                                                                    | verdadero |
| returnID? | booleano | If the message ID should be returned or not. <br /> 1. **true** <br /> 2. **false** (por defecto) |   falso   |

## Ejemplo(s)

This will send "Hello!" to the current channel:

```javascript
bot.command({
    name: 'channelSendMessage',
    code: `
  $channelSendMessage[$channelID;Hello!;false]
  `
});
```

### Embeds

This will send an embed with description and footer to the current channel:

```javascript
bot.command({
    name: 'channelSendMessage',
    code: `
  $channelSendMessage[$channelID;{newEmbed:{title:Hello}{footer:Bye}};false]
  `
});
```
