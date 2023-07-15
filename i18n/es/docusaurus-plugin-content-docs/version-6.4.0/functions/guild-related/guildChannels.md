---
title: '$guildChannels'
description: '$guildChannels devolverá todos los canales de una categoría determinada.'
id: guildChannels
---

`$guildChannels` devolverá todos los canales de una categoría determinada.

## Uso

```php
$guildChannels[servidorID?;opción?;sep?]
```

## Parámetros

| Campo       | Tipo     | Parámetros                                                                                                                            | Requerido |
| ----------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------- |:---------:|
| servidorID? | entero   | La ID del gremio.                                                                                                                     |    no     |
| opción?     | consulta | La opción sobre cómo devolver el canal <br /> 1. **nombre** (por defecto) <br /> 2. **ids** <br /> 3. **mencionar** |   falso   |
| sep?        | string   | El separador para separar los valores devueltos.                                                                                      |   falso   |

## Ejemplo(s)

Esto devolverá la cantidad de Canales de Voz en su servidor:

```javascript
bot.command({
    name: 'guildChannels',
    code: `
  $guildChannels[$guildID;mention;, ]
  `
});
```
