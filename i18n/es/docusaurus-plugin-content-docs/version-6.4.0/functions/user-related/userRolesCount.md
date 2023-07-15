---
title: '$userRolesCount'
description: '$userRolesCount will return a user''s role count.'
id: userRolesCount
---

`$userRolesCount` will return a user's role count.

## Modo de uso

```php
$userRolesCount[userID?;guildID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros    | Requerido |
| ----------- | ------ | ------------- |:---------:|
| usarioID?   | entero | The user ID.  |    no     |
| servidorID? | entero | The guild ID. |    no     |

## Ejemplo(s)

This will return the amount of roles you have assigned:

```javascript
bot.command({
    name: 'userRolesCount',
    code: `
  $userRolesCount[$authorID;$guildID]
  `
});
```
