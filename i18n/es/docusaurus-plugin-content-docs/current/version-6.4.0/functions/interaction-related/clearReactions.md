---
title: '$clearReactions'
description: '$clearReactions will remove a given or all reactions of a message.'
id: clearReactions
---

`$clearReactions` will remove a given or all reactions of a message.

## Modo de uso

```php
$clearReactions[channelID;messageID;emoji]
```

## Parámetros

| Campo         | Tipo   | Parámetros                                                                                   | Requerido |
| ------------- | ------ | -------------------------------------------------------------------------------------------- |:---------:|
| canalID       | entero | The channel ID of where the message is located in.                                           | verdadero |
| ID de mensaje | entero | El ID del mensaje.                                                                           | verdadero |
| emoji         | string | The emoji to remove. <br /> 1. **all** (default) <br /> 2. **emoji** - any emoji |    sí     |

## Ejemplo(s)

This will add two emojis and remove one completely:

```javascript
bot.command({
    name: 'clearReactions',
    code: `
  $clearReactions[$channelID;$messageID;🥱]
  $wait[2s]
  $addCmdReactions[🥱;😩]
  `
});
```
