---
title: '$moveUser'
description: '$moveUser moverá a un usuario determinado entre dos canales de voz.'
id: moveUser
---

`$moveUser` moverá a un usuario determinado entre dos canales de voz.

## Uso

```php
$moveUser[servidorID;ID de usuario;canalID;razon?]
```

## Parámetros

| Campo      | Tipo   | Parámetros                                                      | Requerido |
| ---------- | ------ | --------------------------------------------------------------- |:---------:|
| servidorID | entero | El ID de la hermandad de donde están ubicados los roles.        | verdadero |
| usarioID   | entero | El ID de usuario del usuario a mover.                           | verdadero |
| canalID    | entero | El ID del canal de voz de donde se moverá el usuario.           | verdadero |
| ¿razón?    | string | Razón que se mostrará en los registros de auditoría del gremio. |   falso   |

## Ejemplo(s)

Esto moverá un usuario a otro canal de voz:

```javascript
bot.command({
    name: 'moveUser',
    code: `
  $moveUser[$guildID;userID;new voice channel ID;Testing!]
  `
});
```