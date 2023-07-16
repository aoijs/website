---
title: '$userRoles'
description: '$userRoles devolverá los roles de un usuario específico.'
id: userRoles
---

`$userRoles` devolverá los roles de un usuario específico.

## Uso

```php
$userRoles[usarioID?;servidorID?;opción?,sep?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                                                                                        | Requerido |
| ----------- | ------ | ----------------------------------------------------------------------------------------------------------------- |:---------:|
| usarioID?   | entero | La identificación del usuario.                                                                                    |   falso   |
| servidorID? | entero | ID del servidor.                                                                                                  |   falso   |
| opción?     | cadena | Cómo devolver los roles <br /> 1. **name** (por defecto) <br /> 2. **id** <br /> 3. **mention** |   falso   |
| sep?        | cadena | Separador para separar varios valores devueltos.                                                                  |   falso   |

## Ejemplo(s)

Esto devolverá sus roles:

```javascript
bot.command({
    name: 'userRoles',
    code: `
  $userRoles[$authorID;$guildID;id;, ]
  `
});
```
