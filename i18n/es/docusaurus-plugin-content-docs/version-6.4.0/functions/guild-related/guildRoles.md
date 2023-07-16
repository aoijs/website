---
title: '$guildRoles'
description: '$guildRoles devolverá todos los roles de un gremio específico.'
id: guildRoles
---

`$guildRoles` devolverá todos los roles de un gremio específico.

## Uso

```php
$guildRoles[servidorID?;opción?;sep?]
```

## Parámetros

| Campo       | Tipo     | Parámetros                                                                                                                             | Requerido |
| ----------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------- |:---------:|
| servidorID? | entero   | La ID del gremio.                                                                                                                      |   falso   |
| opción?     | consulta | La opción sobre cómo devolver los roles <br /> 1. **nombre** (por defecto) <br /> 2. **ids** <br /> 3. **mencionar** |   falso   |
| sep?        | string   | El separador para separar los valores devueltos.                                                                                       |   falso   |

## Ejemplo(s)

Esto devolverá todos los roles de tu gremio:

```javascript
bot.command({
    name: 'guildRoles',
    code: `
  $description[$guildRoles[$guildID;name;, ]]
  `
});
```
