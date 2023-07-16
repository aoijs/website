---
title: '$memberAvatar'
description: '$memberAvatar will return the profile picture of a guild member.'
id: memberAvatar
---

`$memberAvatar` will return the profile picture of a guild member.

## Uso

```php
$memberAvatar[guildID?;userID?;size?;dynamic?;format?]
```

## Parámetros

| Campo       | Tipo    | Parámetros                                      | Requerido |
| ----------- | ------- | ----------------------------------------------- |:---------:|
| servidorID? | entero  | The ID of the guild.                            |    no     |
| usarioID?   | entero  | El ID del usuario.                              |    no     |
| size?       | entero  | The size of the image.                          |   falso   |
| dynamic?    | boolean | 1. **true** (default) <br /> 2. **false** |   falso   |
| format?     | cadena  | Image format.                                   |    no     |

## Ejemplo(s)

This will return your profile picture:

```javascript
bot.command({
    name: 'memberAvatar',
    code: `
  $memberAvatar[$guildID;$authorID;2048;true;webp]
  `
});
```
