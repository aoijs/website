---
title: '$guildChannels'
description: '$guildChannels will return all channels of a specific guild.'
id: guildChannels
---

`$guildChannels` will return all channels of a specific guild.

## Modo de uso

```php
$guildChannels[guildID?;option?;sep?]
```

## Parámetros

| Campo       | Tipo     | Parámetros                                                                                                                    | Requerido |
| ----------- | -------- | ----------------------------------------------------------------------------------------------------------------------------- |:---------:|
| servidorID? | entero   | The ID of the guild.                                                                                                          |    no     |
| opción?     | consulta | The option on how to return the channel <br /> 1. **name** (default) <br /> 2. **id** <br /> 3. **mention** |    no     |
| sep?        | string   | Separator to separate multiple returned values.                                                                               |   falso   |

## Ejemplo(s)

This will return all channels of your guild:

```javascript
bot.command({
    name: 'guildChannels',
    code: `
  $guildChannels[$guildID;mention;, ]
  `
});
```
