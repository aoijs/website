---
title: '$guildHighestRole'
description: '$guildHighestRole devolverá el rol más alto de un gremio específico.'
id: guildHighestRole
---

`$guildHighestRole` devolverá todos los roles de un gremio específico.

## Uso

```php
$guildHighestRole[servidorID?;opción?]
```

## Parámetros

| Campo       | Tipo     | Parámetros                                                                                                                             | Requerido |
| ----------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------- |:---------:|
| servidorID? | entero   | La ID del gremio.                                                                                                                      |   falso   |
| opción?     | consulta | La opción sobre cómo devolver los roles <br /> 1. **nombre** (por defecto) <br /> 2. **ids** <br /> 3. **mencionar** |   falso   |

## Ejemplo(s)

Esto devolverá la cantidad de roles de tu gremio:

```javascript
bot.command({
    name: 'guildHighestRole',
    code: `
  $guildHighestRole[$guildID;name]
  `
});
```
