---
title: '$userRoleColor'
description: '$userRoleColor will return the role color of a user''s highest assigned role.'
id: userRoleColor
---

`$userRoleColor` will return the role color of a user's highest assigned role.

## Modo de uso

```php
$userRoleColor[userID?;guildID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros    | Requerido |
| ----------- | ------ | ------------- |:---------:|
| usarioID?   | entero | The user ID.  |    no     |
| servidorID? | entero | The guild ID. |    no     |

## Ejemplo(s)

This will return the Color of your highest role:

```javascript
bot.command({
    name: 'userRoleColor',
    code: `
  $userRoleColor[$authorID;$guildID]
  `
});
```
