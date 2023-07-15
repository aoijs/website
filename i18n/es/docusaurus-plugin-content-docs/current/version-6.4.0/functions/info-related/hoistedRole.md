---
title: '$hoistedRole'
description: '$hoistedRole will return the highest hoisted role of an user.'
id: hoistedRole
---

`$hoistedRole` will return the highest hoisted role of an user.

## Modo de uso

```php
$hoistedRole[userID?;guildID?;option?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                                                                                               | Requerido |
| ----------- | ------ | ------------------------------------------------------------------------------------------------------------------------ |:---------:|
| usarioID?   | entero | El ID del usuario.                                                                                                       |    no     |
| servidorID? | entero | the ID of the guild.                                                                                                     |    no     |
| opción?     | string | The option how to return the role <br /> 1. **name** <br /> 2. **id**  (default) <br /> 3. **mention** |   falso   |

## Ejemplo(s)

This will return the name of your highest hoisted role:

```javascript
bot.command({
    name: 'hoistedRole',
    code: `
  $hoistedRole[$authorID;$guildID;name]
  `
});
```
