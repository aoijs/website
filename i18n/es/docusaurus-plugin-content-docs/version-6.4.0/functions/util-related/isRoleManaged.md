---
title: $isRoleManaged
description: '$isRoleManaged comprobará si un determinado rol es administrado por Discord.'
id: isRoleManaged
---

`$isRoleManaged` comprobará si un determinado rol es administrado por Discord.

## Uso

```php
$isRoleManaged[roleID;guildID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                                            | Requerido |
| ----------- | ------ | --------------------------------------------------------------------- |:---------:|
| roleID      | entero | ID del rol que quieres comprobar si es administrado por Discord o no. | verdadero |
| servidorID? | entero | ID del gremio donde existe el rol.                                    |    no     |

## Ejemplo(s)

Esto comprobará si un rol llamado `Aumento del Servidor` es administrado por Discord y devuelve `verdadero` o `falso`:

```javascript
bot.command({
    name: 'isRoleManaged',
    code: `
  $isRoleManaged[$findRole[Server Booster];$guildID]
  `
});
```
