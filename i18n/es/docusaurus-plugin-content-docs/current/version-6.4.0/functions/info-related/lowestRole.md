---
title: '$userLowestRole'
description: '$userLowestRole will return the lowest role of a specific user.'
id: userLowestRole
---

`$userLowestRole` will return the lowest role of a specific user.

## Modo de uso

```php
$userLowestRole[userID?;guildID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                                 | Requerido |
| ----------- | ------ | ---------------------------------------------------------- |:---------:|
| usarioID?   | entero | ID of the user you want the lowest role to be returned of. |    no     |
| servidorID? | entero | The ID of the guild.                                       |    no     |

## Ejemplo(s)

This will return the ID of your lowest role:

```javascript
bot.command({
    name: 'userLowestRole',
    code: `
  $userLowestRole[$authorID;$guildID]
  `
});
```
