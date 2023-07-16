---
title: '$userStatus'
description: '$userStatus devolverá la presencia de un usuario.'
id: userStatus
---

`$userStatus` devolverá la presencia de un usuario.

## Uso

```php
$userStatus[servidorID?;usuarioID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                                                 | Requerido |
| ----------- | ------ | -------------------------------------------------------------------------- |:---------:|
| servidorID? | entero | La identificación del gremio del gremio del que desea recuperar el estado. |   falso   |
| usarioID?   | entero | El ID del usuario del que desea devolver el estado.                        |   falso   |

## Ejemplo(s)

Esto devolverá `idle`, `online`, `invisible` o `dnd` dependiendo de tu presencia actual:

```javascript
bot.command({
    name: 'userStatus',
    code: `
  $userStatus[$guildID;$authorID]
  `
});
```
