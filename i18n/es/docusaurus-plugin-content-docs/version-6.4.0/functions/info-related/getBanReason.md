---
title: '$getBanReason'
description: '$getBanReason devolverá la razón de baneo de un usuario específico.'
id: getBanReason
---

`$getBanReason` devolverá la razón de baneo de un usuario específico.

## Modo de uso

```php
$getBanReason[servidorID?;usarioID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                                      | Requerido |
| ----------- | ------ | --------------------------------------------------------------- |:---------:|
| servidorID? | entero | El ID del servidor.                                             |    no     |
| usarioID?   | entero | El ID del usuario del que quieres comprobar la razón del baneo. |    no     |

## Ejemplo(s)

Esto devolverá la razón de banear de quien quieras:

```javascript
bot.command({
    name: 'getBanReason',
    code: `
  $getBanReason[$guildID;userID] 
  ` // asegúrese de sustituir "userID" por un ID de usuario real
});
```