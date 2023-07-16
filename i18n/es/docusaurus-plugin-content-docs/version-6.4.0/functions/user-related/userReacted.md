---
title: '$userReacted'
description: '$userReacted will check if a specified user reacted with a specific emoji to a specific message and return either true or false.'
id: userReacted
---

`$userReacted` will check if a specified user reacted with a specific emoji to a specific message and return either true or false.

## Uso

```php
$userReacted[channelID;messageID;userID;emoji]
```

## Parámetros

| Campo         | Tipo   | Parámetros          | Requerido |
| ------------- | ------ | ------------------- |:---------:|
| servidorID    | entero | The guild ID.       | verdadero |
| ID de mensaje | entero | El ID del mensaje.  | verdadero |
| usarioID      | entero | The user ID.        |    sí     |
| emoji         | string | Emoji to check for. |    sí     |

## Ejemplo(s)

This will return `true` as the bot reacted to the initial command message:

```javascript
bot.command({
    name: 'userReacted',
    code: `
$userReacted[$channelID;$messageID;$clientID;😩]
$addCmdReactions[😩]
  `
});
```
