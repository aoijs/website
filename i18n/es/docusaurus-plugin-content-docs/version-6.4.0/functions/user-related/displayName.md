---
title: '$displayName'
description: '$displayName will return the display name of a given user.'
id: displayName
---

`$displayName` will return the display name of a given user.

## Modo de uso

```php
$displayName[guildID?;userID?;returnUser?]
```

## Parámetros

| Campo       | Tipo     | Parámetros                                                                           | Requerido |
| ----------- | -------- | ------------------------------------------------------------------------------------ |:---------:|
| servidorID? | entero   | The ID of the guild.                                                                 |    no     |
| usarioID?   | entero   | El ID del usuario.                                                                   |    no     |
| returnUser? | booleano | Return the username <br /> 1. **true** <br /> 2. **false** (por defecto) |   falso   |

## Ejemplo(s)

This will return your displayName, if you have none then it'll return your Discord username:

```javascript
bot.command({
    name: 'displayName',
    code: `
  $displayName[$guildID;$authorID;true]
  `
});
```
