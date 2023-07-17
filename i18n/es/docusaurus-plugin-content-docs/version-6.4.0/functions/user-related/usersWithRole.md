---
title: '$usersWithRole'
description: '$usersWithRole devolverá los usuarios que tienen un rol específico.'
id: usersWithRole
---

`$usersWithRole` devolverá los usuarios que tienen un rol específico.

## Uso

```php
$usersWithRole[rolID?;servidorID?;opción?,sep?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                                                                  | Requerido |
| ----------- | ------ | ------------------------------------------------------------------------------------------- |:---------:|
| rolID       | entero | ID del rol.                                                                                 | verdadero |
| servidorID? | entero | ID del servidor.                                                                            |   falso   |
| opción?     | string | Cómo devolver los usuarios <br /> 1. **id** (por defecto) <br /> 2. **mention** |   falso   |
| sep?        | string | Separador para separar varios valores devueltos.                                            |   falso   |

## Ejemplo(s)

Esto devolverá los usuarios de un rol específico, asegúrese de reemplazar roleID:

```javascript
bot.command({
    name: 'usersWithRole',
    code: `
  $usersWithRole[roleID;$guildID;id;, ]
  `
});
```
