---
title: '$userAvatar'
description: '$userAvatar will return the profile picture of a specific user.'
id: userAvatar
---

`$userAvatar` will return the profile picture of a specific user.

## Modo de uso

```php
$userAvatar[userID?;size?;dynamic?;format?]
```

## Parámetros

| Campo     | Tipo           | Parámetros                                      | Requerido |
| --------- | -------------- | ----------------------------------------------- |:---------:|
| usarioID? | entero         | El ID del usuario.                              |    no     |
| size?     | cadena, número | The size of the image                           |    no     |
| dynamic?  | booleano       | 1. **true** (default) <br /> 2. **false** |   falso   |
| format?   | string         | The format of the returned image.               |   falso   |

## Ejemplo(s)

This will return your profile picture:

```javascript
bot.command({
    name: 'userAvatar',
    code: `
  $userAvatar[$authorID;2048;true;webp]
  `
});
```
