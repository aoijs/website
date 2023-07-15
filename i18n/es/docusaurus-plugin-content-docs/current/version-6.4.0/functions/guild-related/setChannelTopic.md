---
title: '$setChannelTopic'
description: '$setChannelTopic will modify a channel''s topic.'
id: setChannelTopic
---

`$setChannelTopic` will modify a channel's topic.

## Modo de uso

```php
$setChannelTopic[channelID;topic]
```

## Parámetros

| Campo   | Tipo     | Parámetros                                          | Requerido |
| ------- | -------- | --------------------------------------------------- |:---------:|
| canalID | entero   | The ID of the channel whose topic will be modified. | verdadero |
| topic   | consulta | Content of the new channel topic.                   | verdadero |

## Ejemplo(s)

This will change the topic of the channel where the command is executed in:

```javascript
bot.command({
    name: 'setChannelTopic',
    code: `
   $setChannelTopic[$channelID;Hello! This is the new channel topic!]`
});
```