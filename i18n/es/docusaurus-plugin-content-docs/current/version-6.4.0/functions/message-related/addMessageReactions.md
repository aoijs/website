---
title: '$addMessageReactions'
description: '$addMessageReactions will add a reaction to a specific message.'
id: addMessageReactions
---

`$addMessageReactions` will add a reaction to a specific message.

## Modo de uso

```php
$addMessageReactions[channelID;messageID;...reactions]
```

## Parámetros

| Campo         | Tipo   | Parámetros                                  | Requerido |
| ------------- | ------ | ------------------------------------------- |:---------:|
| canalID       | entero | Channel ID of where the message is located. | verdadero |
| ID de mensaje | entero | Mensaje ID.                                 | verdadero |
| reacciones    | string | Reactions to add.                           |    sí     |

## Ejemplo(s)

This will add the given reactions to your message:

```javascript
bot.command({
    name: 'addMessageReactions',
    code: `
 $addMessageReactions[$channelID;$messageID;✅;❌]
  `
});
```
