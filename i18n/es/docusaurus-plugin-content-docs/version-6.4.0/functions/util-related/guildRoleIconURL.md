---
title: '$guildRoleIconURL'
description: '$guildRoleIconURL recuperará la URL de la imagen del icono del rol.'
id: guildRoleIconURL
---

`$guildRoleIconURL` recuperará la URL de la imagen del icono de rol.

## Uso

```php
$guildRoleIconURL[servidorID?;rolId]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                  | Requerido |
| ----------- | ------ | ------------------------------------------- |:---------:|
| servidorID? | entero | ID del servidor en el que existe el rol.    |   falso   |
| rolId       | entero | ID del rol que quieres comprobar si existe. | verdadero |

## Ejemplo(s)

Esto devolverá la URL de la imagen del icono de rol:

```javascript
bot.command({
    name: 'guildRoleIconURL',
    code: `
  $guildRoleIconURL[$guildID;900004369355931729]
  `
});
```