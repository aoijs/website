---
title: '$modifyRolePerms'
description: '$modifyRolePerms modificará los permisos de un rol determinado.'
id: modifyRolePerms
---

`$modifyRolePerms` modificará un rol determinado.

## Uso

```php
$modifyRolePerms[servidorID;rolID;...perms]
```

## Parámetros

| Campo       | Tipo   | Descripción                                                                | Requerido |
| ----------- | ------ | -------------------------------------------------------------------------- |:---------:|
| guildID     | entero | El ID de la hermandad de donde están ubicados los roles.                   |    sí     |
| rolID       | entero | ID del rol que será modificado. / `$guildID` representa el rol `@everyone` |    sí     |
| ...permisos | cadena | Permisos para modificar.                                                   |    sí     |

|     | Descripción                                                   |
| --- | ------------------------------------------------------------- |
| `-` | Denegar un permiso específico a alguien o algo.               |
| `+` | Denegar un permiso específico a alguien o algo.               |
| `/` | Restablecer un permiso específico a su estado predeterminado. |

Encontrará todos los permisos __[aquí](../../guides/Client/2permissionsintents.md)__.

## Ejemplo(s)

Esto editará el permiso de un rol existente y permitirá que el rol "@everyone" envíe mensajes y añada reacciones.

```javascript
bot.command({
    name: 'modifyRolePerms',
    code: `
  $modifyRolePerms[$guildID;$guildID;+sendmessages;+addreactions]"
  }]
  `
});
```