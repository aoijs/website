---
title: '$modifyChannelPerms'
description: '$modifyChannelPerms will modify a given channels permission overrides.'
id: modifyChannelPerms
---

`$modifyChannelPerms` will modify a given channel's permission overrides.

## Modo de uso

```php
$modifyChannelPerms[channelID;roruID;...perms]
```

## Parámetros

| Campo       | Tipo   | Descripción                                                                | Requerido |
| ----------- | ------ | -------------------------------------------------------------------------- |:---------:|
| canalID     | entero | The channel ID of which you're trying to modify its permissions.           |    sí     |
| roruID      | entero | The ID of an user or role. ( `$guildID` represents the `@everyone` role. ) |    sí     |
| ...permisos | string | The permissions that will be changed.                                      |    sí     |

|     | Descripción                                          |
| --- | ---------------------------------------------------- |
| `-` | Deny a specific permission to someone or something.  |
| `+` | Allow a specific permission to someone or something. |
| `/` | Reset a specific permission to its default state.    |

Encontrará todos los permisos __[aquí](../../guides/client/2permissionsintents.md)__.

## Ejemplo(s)

This will allow `@everyone` to send messages and add reactions in the current channel:

```javascript
bot.command({
    name: 'modifyChannelPerms',
    code: `
  $modifyChannelPerms[$channelID;$guildID;+sendmessages;+addreactions]
  `
});
```
