---
title: '$guildRoles'
description: '$guildRoles will return all roles of a specific guild.'
id: guildRoles
---

`$guildRoles` will return all roles of a specific guild.

## Modo de uso

```php
$guildRoles[guildID?;option?;sep?]
```

## Parámetros

| Campo       | Tipo     | Parámetros                                                                                                                  | Requerido |
| ----------- | -------- | --------------------------------------------------------------------------------------------------------------------------- |:---------:|
| servidorID? | entero   | The ID of the guild.                                                                                                        |    no     |
| opción?     | consulta | The option on how to return the roles <br /> 1. **name** (default) <br /> 2. **id** <br /> 3. **mention** |    no     |
| sep?        | string   | Separator to separate multiple returned values.                                                                             |   falso   |

## Ejemplo(s)

This will return all roles of your guild:

```javascript
bot.command({
    name: 'guildRoles',
    code: `
  $description[$guildRoles[$guildID;name;, ]]
  `
});
```
