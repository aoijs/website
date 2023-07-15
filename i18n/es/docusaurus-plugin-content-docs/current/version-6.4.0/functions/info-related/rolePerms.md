---
title: '$rolePerms'
description: '$rolePerms will return all given permissions of a role.'
id: rolePerms
---

`$rolePerms` will return all given permissions of a role.

## Modo de uso

```php
$rolePerms[roleID;sep?;guildID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                      | Requerido |
| ----------- | ------ | ----------------------------------------------- |:---------:|
| roleID      | entero | The role ID.                                    | verdadero |
| sep?        | entero | Separator to separate multiple returned values. |    no     |
| servidorID? | entero | The guild ID.                                   |   falso   |

## Ejemplo(s)

This will return the permissions for the `@everyone` role:

```javascript
bot.command({
    name: 'rolePerms',
    code: `
  $rolePerms[$guildID;, ;$guildID]
  `
});
```
