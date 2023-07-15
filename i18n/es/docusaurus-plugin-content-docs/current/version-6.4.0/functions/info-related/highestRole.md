---
title: '$userHighestRole'
description: '$userHighestRole will return the highest role of a specific user.'
id: userHighestRole
---

`$userHighestRole` will return the highest role of a specific user.

## Modo de uso

```php
$userHighestRole[userID?;guildID?;option?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                                                                                              | Requerido |
| ----------- | ------ | ----------------------------------------------------------------------------------------------------------------------- |:---------:|
| usarioID?   | entero | The ID of the user you want the highest role to be returned of.                                                         |    no     |
| servidorID? | entero | The ID of the guild.                                                                                                    |    no     |
| opción?     | string | The option how to return the role <br /> 1. **name** <br /> 2. **id** (default) <br /> 3. **mention** |   falso   |

## Ejemplo(s)

This will return the name of your highest role:

```javascript
bot.command({
    name: 'userHighestRole',
    code: `
  $userHighestRole[$authorID;$guildID;name]
  `
});
```
