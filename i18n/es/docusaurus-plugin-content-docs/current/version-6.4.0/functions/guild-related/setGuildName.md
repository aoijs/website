---
title: '$setGuildName'
description: '$setGuildName will change a guilds'' name.'
id: setGuildName
---

`$setGuildName` will change a guilds' name.

## Modo de uso

```php
$setGuildName[name;guildID?]
```

## Parámetros

| Campo       | Tipo     | Parámetros                                       | Requerido |
| ----------- | -------- | ------------------------------------------------ |:---------:|
| nombre      | consulta | The new guild name.                              | verdadero |
| servidorID? | entero   | The ID of the guild whose name will be modified. |    no     |

## Ejemplo(s)

This will change guild's name you're executing the command in to your username:

```javascript
bot.command({
    name: 'setGuildName',
    code: `
   $setGuildName[$username[$authorID];$guildID]`
});
```