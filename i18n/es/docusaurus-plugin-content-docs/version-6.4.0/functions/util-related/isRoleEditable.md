---
title: '$isRoleEditable'
description: '$isRoleEditable comprobará si el rol es editable.'
id: isRoleEditable
---

`$isRoleEditable` comprobará si el rol es editable.

## Uso

```php
$isRoleEditable[roleID;guildID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                       | Requerido |
| ----------- | ------ | ------------------------------------------------ |:---------:|
| roleID      | entero | ID del rol que quieres comprobar si es editable. | verdadero |
| servidorID? | entero | El ID de la hermandad donde existe el rol.       |    no     |

## Ejemplo(s)

Esto comprobará si un rol llamado `Propietario` es editable:

```javascript
bot.command({
    name: 'isRoleEditable',
    code: `
  $isRoleEditable[$findRole[Owner];$guildID]
  `
});
```
