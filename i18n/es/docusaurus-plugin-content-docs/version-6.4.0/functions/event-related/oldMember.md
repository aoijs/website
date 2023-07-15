---
title: '$oldMember'
description: "$oldMember contiene datos para el miembro antes de que se actualizara, esto es del caché de discordia y puede estar vacío dependiendo de si está en caché, así que use la opción parcial antes de intentar acceder a cualquier propiedad.\n (memberUpdate evento)"
id: oldMember
---

`$oldMember` contiene datos para el miembro antes de que se actualizara, esto es del caché de discord y puede estar vacío dependiendo de si está en caché, así que use la opción parcial antes de intentar acceder a cualquier propiedad. (memberUpdate evento)

## Uso

```php
$oldMember[opción]
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