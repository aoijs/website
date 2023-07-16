---
title: '$userBanner'
description: '$userBanner will return the profile banner of a specific user.'
id: userBanner
---

`$userBanner` will return the profile banner of a specific user.

## Uso

```php
$userBanner[userID?;size?;dynamic?;format?]
```

## Parámetros

| Campo     | Tipo           | Parámetros                                      | Requerido |
| --------- | -------------- | ----------------------------------------------- |:---------:|
| usarioID? | entero         | El ID del usuario.                              |    no     |
| size?     | cadena, número | The size of the image.                          |    no     |
| dynamic?  | booleano       | 1. **true** (default) <br /> 2. **false** |   falso   |
| format?   | string         | The format of the returned image.               |   falso   |

## Ejemplo(s)

This will return your profile banner:

```javascript
bot.command({
    name: 'userBanner',
    code: `
  $userBanner[$authorID;4096;true;webp]
  `
});
```
