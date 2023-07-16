---
title: '$usersBanned'
description: '$usersBanned will return the banned users of a guild.'
id: usersBanned
---

`$usersBanned` will return the banned users of a guild.

## Uso

```php
$usersBanned[guildID?;force?;option?;sep?]
```

## Parámetros

| Campo       | Tipo    | Parámetros                                                                                                               | Requerido |
| ----------- | ------- | ------------------------------------------------------------------------------------------------------------------------ |:---------:|
| servidorID? | entero  | The guild ID.                                                                                                            |    no     |
| force?      | boolean | 1. **true** <br /> 2. **false** (por defecto)                                                                      |    no     |
| opción?     | string  | How to return the banned users <br /> 1. **id** (default) <br /> 1. **username** <br /> 1. **mention** |   falso   |
| sep?        | string  | Separator to separate multiple returned values.                                                                          |   falso   |

## Ejemplo(s)

This will return the banned users of your guild as mention in an embed:

```javascript
bot.command({
    name: 'usersBanned',
    code: `
$description[$usersBanned[$guildID;false;mention;, ]]
  `
});
```
