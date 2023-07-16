---
title: '$userPerms'
description: '$userPerms devolverá el permiso de un usuario de un gremio específico.'
id: userPerms
---

`$userPerms` devolverá el permiso de un usuario de un gremio específico.

## Uso

```php
$userPerms[usuarioID;sep?;servidorID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                       | Requerido |
| ----------- | ------ | ------------------------------------------------ |:---------:|
| usarioID?   | entero | La identificación del usuario.                   |   falso   |
| sep?        | cadena | Separador para separar varios valores devueltos. |   falso   |
| servidorID? | entero | ID del servidor.                                 |   falso   |

## Ejemplo(s)

Esto devolverá sus permisos:

```javascript
bot.command({
    name: 'userPerms',
    code: `
  $userPerms[$authorID;, ;$guildID]
  `
});
```
