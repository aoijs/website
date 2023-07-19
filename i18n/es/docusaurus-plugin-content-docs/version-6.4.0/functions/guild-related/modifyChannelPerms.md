---
title: '$modifyChannelPerms'
description: '$modifyChannelPerms modificará el permiso de un canal determinado.'
id: modifyChannelPerms
---

`$modifyChannelPerms` modificará la anulación de los permisos de un determinado canal.

## Uso

```php
$modifyChannelPerms[canalID;roruID;...perms]
```

## Parámetros

| Campo       | Tipo   | Descripción                                                              | Requerido |
| ----------- | ------ | ------------------------------------------------------------------------ |:---------:|
| canalID     | entero | El ID del canal del que intentas modificar sus permisos.                 | verdadero |
| roruID      | entero | El ID de un usuario o rol. ( `$guildID` representa el rol `@everyone`. ) | verdadero |
| ...permisos | string | Los permisos que se cambiarán.                                           | verdadero |

|     | Descripción                                                   |
| --- | ------------------------------------------------------------- |
| `-` | Denegar un permiso específico a alguien o algo.               |
| `+` | Denegar un permiso específico a alguien o algo.               |
| `/` | Restablecer un permiso específico a su estado predeterminado. |

Encontrará todos los permisos __[aquí](../../../../../../versioned_docs/version-6.4.0/guides/client/2permissionsintents.md)__.

## Ejemplo(s)

Esto permitirá a `@everyone` enviar mensajes y añadir reacciones en el canal actual:

```javascript
bot.command({
    name: 'modifyChannelPerms',
    code: `
  $modifyChannelPerms[$channelID;$guildID;+sendmessages;+addreactions]
  `
});
```
