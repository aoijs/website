---
title: '$userRoles'
description: '$userRoles will return the roles of a specific user.'
id: userRoles
---

`$userRoles` will return the roles of a specific user.

## Modo de uso

```php
$userRoles[userID?;guildID?;option?;sep?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                                                                                    | Requerido |
| ----------- | ------ | ------------------------------------------------------------------------------------------------------------- |:---------:|
| usarioID?   | entero | The user ID.                                                                                                  |    no     |
| servidorID? | entero | The guild ID.                                                                                                 |    no     |
| opción?     | string | How to return the roles <br /> 1. **name** (default) <br /> 2. **id** <br /> 3. **mention** |   falso   |
| sep?        | string | Separator to separate multiple returned values.                                                               |   falso   |

## Ejemplo(s)

This will return your roles:

```javascript
bot.command({
    name: 'userRoles',
    code: `
  $userRoles[$authorID;$guildID;id;, ]
  `
});
```
