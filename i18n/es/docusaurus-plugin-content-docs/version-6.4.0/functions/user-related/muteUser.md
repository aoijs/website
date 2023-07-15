---
title: '$muteUser'
description: '$muteUser will mute or unmute a given user in a Voice Channel.'
id: muteUser
---

`$muteUser` will mute or unmute a given user in a Voice Channel.

## Modo de uso

```php
$muteUser[guildID;userID;mute?;reason?]
```

## Parámetros

| Campo      | Tipo     | Parámetros                                                                                            | Requerido |
| ---------- | -------- | ----------------------------------------------------------------------------------------------------- |:---------:|
| servidorID | entero   | The guild ID of where the user is located.                                                            | verdadero |
| usarioID   | entero   | The user ID of the user to mute/unmute.                                                               | verdadero |
| mute?      | booleano | Mute or unmute the user. <br /> 1. **true** (mute / default) <br /> 2. **false** (unmute) |   falso   |
| ¿razón?    | string   | Razón que se mostrará en los registros de auditoría del gremio.                                       |   falso   |

## Ejemplo(s)

This will server mute yourself (must be in a voice channel):

```javascript
bot.command({
    name: 'muteUser',
    code: `
  $muteUser[$guildID;$authorID;true]
  `
});
```