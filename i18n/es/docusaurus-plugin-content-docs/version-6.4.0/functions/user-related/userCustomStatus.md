---
title: '$userCustomStatus'
description: '$userCustomStatus devolverá el estado personalizado de un usuario.'
id: userCustomStatus
---

`$userCustomStatus` devolverá el estado personalizado de un usuario.

## Uso

```php
$userCustomStatus[servidorID?;usuarioID?;opcion?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                                                                                                                            | Requerido |
| ----------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |:---------:|
| servidorID? | entero | ID del rol.                                                                                                                                           |   falso   |
| usarioID?   | entero | La identificación del usuario.                                                                                                                        |   falso   |
| opción?     | cadena | Qué parte del estado se devolverá <br /> 1. **state** (predeterminado): devuelve el texto de estado <br /> 2. **emoji** - cualquier emoji |   falso   |

## Ejemplo(s)

Esto devolverá tu texto de estado si tienes alguno:

```javascript
bot.command({
    name: 'userCustomStatus',
    code: `
  $userCustomStatus[$authorID;$guildID;state]
  `
});
```
