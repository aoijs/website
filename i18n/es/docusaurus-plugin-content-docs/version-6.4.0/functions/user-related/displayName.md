---
title: '$displayName'
description: '$displayName devolverá el nombre mostrado de un usuario dado.'
id: displayName
---

`$displayName` devolverá el nombre mostrado de un usuario determinado.

## Uso

```php
$displayName[servidorID?;usuarioID?;volverUsuario?]
```

## Parámetros

| Campo            | Tipo     | Parámetros                                                                                     | Requerido |
| ---------------- | -------- | ---------------------------------------------------------------------------------------------- |:---------:|
| servidorID?      | entero   | ID del servidor.                                                                               |   falso   |
| usarioID?        | entero   | El ID del usuario.                                                                             |   falso   |
| ¿volver usuario? | booleano | Devuelve el nombre de usuario <br /> 1. **true** <br /> 2. **false** (por defecto) |   falso   |

## Ejemplo(s)

Esto devolverá tu nombre de displayName, si no tienes ninguno, entonces devolverá tu nombre de usuario de Discord:

```javascript
bot.command({
    name: 'displayName',
    code: `
  $displayName[$guildID;$authorID;true]
  `
});
```
