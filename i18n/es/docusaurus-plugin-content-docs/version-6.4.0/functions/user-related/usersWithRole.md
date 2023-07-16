---
title: '$usersWithRole'
description: '$usersWithRole will return the users who have a specific role.'
id: usersWithRole
---

`$usersWithRole` will return the users who have a specific role.

## Uso

```php
$usersWithRole[roleID;guildID?;option?;sep?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                                                           | Requerido |
| ----------- | ------ | ------------------------------------------------------------------------------------ |:---------:|
| roleID      | entero | The role ID.                                                                         | verdadero |
| servidorID? | entero | The guild ID.                                                                        |    no     |
| opción?     | string | How to return the users <br /> 1. **id** (default) <br /> 2. **mention** |   falso   |
| sep?        | string | Separator to separate multiple returned values.                                      |   falso   |

## Ejemplo(s)

This will return the users of a specific role, make sure to replace roleID:

```javascript
bot.command({
    name: 'usersWithRole',
    code: `
  $usersWithRole[roleID;$guildID;id;, ]
  `
});
```
