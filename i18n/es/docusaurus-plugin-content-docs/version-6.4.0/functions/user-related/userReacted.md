---
title: '$userReacted'
description: '$userReacted verificará si un usuario específico reaccionó con un emoji específico a un mensaje específico y devolverá true o false.'
id: userReacted
---

`$userReacted` comprobará si un usuario específico reaccionó con un emoji específico a un mensaje específico y devolverá true o false.

## Uso

```php
$userReacted[canalID;mensajeID;ID de usuario;emoji]
```

## Parámetros

| Campo         | Tipo   | Parámetros                     | Requerido |
| ------------- | ------ | ------------------------------ |:---------:|
| servidorID    | entero | El ID del servidor.            | verdadero |
| ID de mensaje | entero | El ID del mensaje.             | verdadero |
| usarioID      | entero | La identificación del usuario. | verdadero |
| emoji         | cadena | Emoji para comprobar.          | verdadera |

## Ejemplo(s)

Esto devolverá `true` como el bot reaccionó al mensaje de comando inicial:

```javascript
bot.command({
    name: 'userReacted',
    code: `
$userReacted[$channelID;$messageID;$clientID;😩]
$addCmdReactions[😩]
  `
});
```
