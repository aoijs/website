---
title: '$guildHighestRole'
description: '$guildHighestRole will return the highest guild role of a specific guild.'
id: guildHighestRole
---

`$guildHighestRole` will return the highest guild role of a specific guild.

## Modo de uso

```php
$guildHighestRole[guildID?;option?]
```

## Parámetros

| Campo       | Tipo     | Parámetros                                                                                                                 | Requerido |
| ----------- | -------- | -------------------------------------------------------------------------------------------------------------------------- |:---------:|
| servidorID? | entero   | The ID of the guild.                                                                                                       |    no     |
| opción?     | consulta | The option on how to return the role <br /> 1. **name** (default) <br /> 2. **id** <br /> 3. **mention** |    no     |

## Ejemplo(s)

This will return the name of the highest role of your guild:

```javascript
bot.command({
    name: 'guildHighestRole',
    code: `
  $guildHighestRole[$guildID;name]
  `
});
```
