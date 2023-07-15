---
title: '$setRoleIcon'
description: '$setRoleIcon establecerá el icono de un rol específico.'
id: setRoleIcon
---

`$setRoleIcon` establecerá el icono de un rol específico.

## Uso

```php
$setRoleIcon[servidorID;rolID;icono]
```

## Parámetros

| Campo      | Tipo   | Parámetros                               | Requerido |
| ---------- | ------ | ---------------------------------------- | --------- |
| servidorID | entero | ID del servidor en el que existe el rol. | no        |
| rolID      | entero | ID del rol.                              | no        |
| icono      | string | La URL del icono.                        | falso     |

## Ejemplo(s)

Esto cambiará el icono de un rol determinado al icono especificado:

```javascript
bot.command({
    name: 'setRoleIcon',
    code: `
  $setRoleIcon[$guildID;roleID;iconURL]
  `
});
```