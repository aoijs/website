---
title: '$userCustomStatus'
description: '$userCustomStatus will return a user''s custom status.'
id: userCustomStatus
---

`$userCustomStatus` will return a user's custom status.

## Uso

```php
$userCustomStatus[guildID?;userID?;option?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                                                                                                                            | Requerido |
| ----------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |:---------:|
| servidorID? | entero | The role ID.                                                                                                                                          |    no     |
| usarioID?   | entero | The user ID.                                                                                                                                          |    no     |
| opción?     | string | Which part of the status will be returned <br /> 1. **state** (default) - returns the status text <br /> 2. **emoji** - returns the emoji |   falso   |

## Ejemplo(s)

This will return your status text if you have any:

```javascript
bot.command({
    name: 'userCustomStatus',
    code: `
  $userCustomStatus[$authorID;$guildID;state]
  `
});
```
