---
title: '$giveRole'
description: '$giveRole dará a un usuario específico un rol específico.'
id: giveRole
---

`$giveRole` le dará a un usuario específico un rol específico.

## Uso

```php
$giveRole[servidorID;ID de usuario;Identificación del rol;razon?]
```

## Parámetros

| Campo                  | Tipo   | Parámetros                                                      | Requerido |
| ---------------------- | ------ | --------------------------------------------------------------- |:---------:|
| servidorID             | entero | De qué gremio debe recibir el miembro los papeles.              | verdadero |
| usarioID               | entero | El ID de usuario del miembro del gremio.                        | verdadero |
| Identificación del rol | entero | El ID del rol a dar.                                            | verdadero |
| ¿razón?                | string | razón que se mostrará en los registros de auditoría del gremio. |   falso   |

Ten en cuenta que el rol **más alto** de los bots debe estar por encima del rol que estás intentando asignar.

## Ejemplo(s)

Esto le asignará un rol llamado "Admin" (si está presente):

```javascript
bot.command({
    name: 'giveRole',
    code: `
  $giveRole[$guildID;$authorID;$findRole[Admin];razon.]
  `
});
```