---
title: '$moveUser'
description: '$moveUser will move a given user between two Voice Channels.'
id: moveUser
---

`$moveUser` will move a given user between two Voice Channels.

## Uso

```php
$moveUser[guildID;userID;channelID;reason?]
```

## Parámetros

| Campo      | Tipo   | Parámetros                                                      | Requerido |
| ---------- | ------ | --------------------------------------------------------------- |:---------:|
| servidorID | entero | The guild ID of where the voice channel is located in.          | verdadero |
| usarioID   | entero | The user ID of the user to move.                                | verdadero |
| canalID    | entero | The Voice Channel ID of where the user will be moved to.        |    sí     |
| ¿razón?    | string | Razón que se mostrará en los registros de auditoría del gremio. |   falso   |

## Ejemplo(s)

This will move a user to another Voice Channel:

```javascript
bot.command({
    name: 'moveUser',
    code: `
  $moveUser[$guildID;userID;new voice channel ID;Testing!]
  `
});
```