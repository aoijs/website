---
title: '$userNickname'
description: '$userNickname devolverá el apodo de un usuario.'
id: userNickname
---

`$userNickname` devolverá el apodo de un usuario.

## Uso

```php
$userNickname[servidorID?;usuarioID?;volverUsuario?]
```

## Parámetros

| Campo            | Tipo     | Parámetros                                                                                     | Requerido |
| ---------------- | -------- | ---------------------------------------------------------------------------------------------- |:---------:|
| servidorID?      | entero   | ID del servidor.                                                                               |   falso   |
| usarioID?        | entero   | El ID del usuario.                                                                             |   falso   |
| ¿volver usuario? | booleano | Devuelve el nombre de usuario <br /> 1. **true** <br /> 2. **false** (por defecto) |   falso   |

## Ejemplo(s)

Esto devolverá su apodo, si no tiene ninguno, devolverá su nombre de usuario de Discord:

```javascript
bot.command({
    name: 'nickname',
    code: `
  $userNickname[$guildID;$authorID;true]
  `
});
```
