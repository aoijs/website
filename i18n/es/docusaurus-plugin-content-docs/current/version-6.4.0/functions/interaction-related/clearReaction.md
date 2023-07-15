---
title: '$clearReaction'
description: '$clearReaction will remove a given reaction of a message of a given user.'
id: clearReaction
---

`$clearReaction` will remove a given reaction of a message of a given user.

## Modo de uso

```php
$clearReaction[channelID;messageID;userID;emoji]
```

## Parámetros

| Campo         | Tipo   | Parámetros                                                                                         | Requerido |
| ------------- | ------ | -------------------------------------------------------------------------------------------------- |:---------:|
| canalID       | entero | The channel ID of where the message is located in.                                                 | verdadero |
| ID de mensaje | entero | El ID del mensaje.                                                                                 | verdadero |
| usarioID      | entero | The user ID of the user whose reactions shall be removed.                                          |    sí     |
| emoji         | string | The exact emoji to remove. <br /> 1. **all** (default) <br /> 2. **emoji** - any emoji |    sí     |

## Ejemplo(s)

This will add and remove the bot's reaction after two seconds:

```javascript
bot.command({
    name: 'clearReaction',
    code: `
  $clearReaction[$channelID;$messageID;$clientID;🥱]
  $wait[2s]
  $addCmdReactions[🥱]
  `
});
```
