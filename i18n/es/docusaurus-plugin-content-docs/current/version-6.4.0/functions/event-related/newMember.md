---
title: '$newMember'
description: '$newMember contiene datos para el miembro después de la actualización, podría ser una buena idea verificar la opción parcial antes de acceder a cualquier propiedad. (memberUpdate evento)'
id: newMember
---

`$newMember` contiene datos para el miembro después de la actualización, podría ser una buena idea verificar la opción parcial antes de acceder cualquier propiedad. (memberUpdate evento)

## Uso

```php
$newMember[opción]
```

## Parámetros

| Campo  | Tipo   | Descripción         | Requerido |
| ------ | ------ | ------------------- |:---------:|
| opción | cadena | Opción a recuperar. | verdadero |

### Opciones

| Campo         | Tipo   | Descripción                         |
| ------------- | ------ | ----------------------------------- |
| id            | entero | Devuelve el ID de usuario.          |
| name          | cadena | Devuelve el nombre del usuario.     |
| roles         | cadena | Devuelve roles de usuario.          |
| permissions   | cadena | Devuelve los permisos de usuario.   |
| nick          | cadena | Devuelve el apodo del usuario.      |
| highestRoleID | entero | Devuelve el usuario Higher role ID. |

## Ejemplo(s)
- **Nota: necesitas la intención `GuildMembers`**

```js
bot.memberUpdateCommand({
    channel: "channelid",
    code: `
    $username[$newMember[id]] ha actualizado su apodo!
- Nuevo apodo: $newMember[nick]
 - Apodo antiguo: $oldMember[nick]

   $username[$newMember[id]] ha actualizado su nombre!
- Nuevo nombre: $newMember[name]
 - Viejo nombre: $oldMember[name]`
})
```
- Este código se ejecutará cuando __miembro actualice su apodo de gremio o nombre de usuario de discordia__

---