---
title: '$roleMembersCount'
description: '$roleMembersCount will return the amount of members who have a specific role.'
id: roleMembersCount
---

`$roleMembersCount` will return the amount of members who have a specific role.

## Modo de uso

```php
$roleMembersCount[roleID;guildID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros    | Requerido |
| ----------- | ------ | ------------- |:---------:|
| roleID      | entero | The role ID.  | verdadero |
| servidorID? | entero | The guild ID. |    no     |

## Ejemplo(s)

This will return the amount of users who have a specific role:

```javascript
bot.command({
    name: 'roleMembersCount',
    code: `
  $roleMembersCount[$guildID;$guildID]
  `
});
```