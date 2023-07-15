---
title: '$ban'
description: '$ban baneará a un usuario de un gremio dado.'
id: ban
---

`$ban` baneará a un usuario de un gremio.

## Uso

```php
$ban[guildID;userID;days?;reason?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                                                | Requerido |
| ----------- | ------ | ------------------------------------------------------------------------- |:---------:|
| servidorID? | entero | De qué gremio debe ser baneado el usuario.                                | verdadero |
| usarioID    | entero | El usuario a banear.                                                      | verdadero |
| días?       | cadena | Días del historial de mensajes a eliminar, no puede ser superior a 7 días |   falso   |
| ¿razón?     | cadena | razón que se mostrará en los registros de auditoría del gremio.           |   falso   |

## Ejemplo(s)

Esto baneará a un usuario aleatorio de tu gremio:

```javascript
bot.command({
    name: 'ban',
    code: `
  $ban[$guildID;$randomUserID;7;Imagina que te baneen.]
  `
});
```
