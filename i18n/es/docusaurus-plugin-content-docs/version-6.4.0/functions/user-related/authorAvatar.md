---
title: '$authorAvatar'
description: '$authorAvatar will return the profile picture of the command author.'
id: authorAvatar
---

`$authorAvatar` will return the profile picture of the command author.

## Modo de uso

```php
$authorAvatar[size?;dynamic?;format?]
```

## Parámetros

| Campo    | Tipo           | Parámetros                                      | Requerido |
| -------- | -------------- | ----------------------------------------------- |:---------:|
| size?    | cadena, número | The size of the image                           |    no     |
| dynamic? | boolean        | 1. **true** (default) <br /> 2. **false** |    no     |
| format?  | string         | The format of the returned image.               |   falso   |

## Ejemplo(s)

This will return your profile picture:

```javascript
bot.command({
    name: 'authorAvatar',
    code: `
  $authorAvatar[2048;true;webp]
  `
});
```
