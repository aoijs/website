---
title: '$addApplicationCommandPermissions'
description: '$addApplicationCommandPermissions cambiará los permisos de un comando slash.'
id: addApplicationCommandPermissions
---

## Modo de uso

```php
$addApplicationCommandPermissions[servidorID/global?;id;...perms]
```

## Parámetros

| Campo             | Tipo            | Parámetros                                                                                        | Requerido |
| ----------------- | --------------- | ------------------------------------------------------------------------------------------------- |:---------:|
| servidorID/global | string, integer | Tipo de comando de aplicación. <br/> 1. **global** <br/> 2. **un guildID específico** | verdadero |
| id                | entero          | Tipo de comando de aplicación.                                                                    | verdadero |
| ...permisos       | string          | Permisos.                                                                                         | verdadero |

## Ejemplo(s)

Esto deshabilitará el comando de barra slash para todos los miembros de la guild ( asegúrese de reemplazar "ID" con el comando de barra slash real ID ):

```javascript
bot.command({
    name: 'addApplicationCommandPermissions',
    code: `
    $addApplicationCommandPermissions[$guildID;ID;[
  {
    id: '$guildID',
    type: 'ROLE',
    permission: false
  }
]]`
});
```
