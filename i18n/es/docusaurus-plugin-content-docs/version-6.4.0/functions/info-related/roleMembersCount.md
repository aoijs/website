---
title: '$roleMembersCount'
description: '$roleMembersCount devolverá la cantidad de miembros que tienen un rol específico.'
id: roleMembersCount
---

`$roleMembersCount` devolverá la cantidad de miembros que tienen un rol específico.

## Modo de uso

```php
$roleMembersCount[rolID;servidorID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros       | Requerido |
| ----------- | ------ | ---------------- |:---------:|
| rolID       | entero | ID del rol.      | verdadero |
| servidorID? | entero | ID del servidor. |    no     |

## Ejemplo(s)

Esto devolverá la cantidad de usuarios que tienen un rol específico:

```javascript
bot.command({
    name: 'roleMembersCount',
    code: `
  $roleMembersCount[$guildID;$guildID]
  `
});
```