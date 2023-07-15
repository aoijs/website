---
title: '$setGuildIcon'
description: '$setGuildIcon will change a guilds'' icon.'
id: setGuildIcon
---

`$setGuildIcon` will change a guilds' icon.

## Modo de uso

```php
$setGuildIcon[URL;guildID?]
```

## Parámetros

| Campo       | Tipo     | Parámetros                                   | Requerido |
| ----------- | -------- | -------------------------------------------- |:---------:|
| URL         | consulta | URL of the new guild Icon.                   | verdadero |
| servidorID? | entero   | The guild ID of where to set the guild Icon. |    no     |

## Ejemplo(s)

This will change guild's icon you're executing the command in to your user avatar:

```javascript
bot.command({
    name: 'setGuildIcon',
    code: `
   $setGuildIcon[$userAvatar[$authorID];$guildID]`
});
```