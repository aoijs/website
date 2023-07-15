---
title: '$rolePerms'
description: '$rolePerms devolverá todos los permisos de un rol determinado.'
id: rolePerms
---

`$rolePerms` devolverá todos los permisos de un rol determinado.

## Modo de uso

```php
$rolePerms[rolID;sep?;servidorID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                       | Requerido |
| ----------- | ------ | ------------------------------------------------ |:---------:|
| rolID       | entero | ID del rol.                                      | verdadero |
| sep?        | entero | Separador para separar varios valores devueltos. |    no     |
| servidorID? | entero | ID del servidor.                                 |   falso   |

## Ejemplo(s)

Esto devolverá los permisos para el rol `@everyone`:

```javascript
bot.command({
    name: 'rolePerms',
    code: `
  $rolePerms[$guildID;, ;$guildID]
  `
});
```
