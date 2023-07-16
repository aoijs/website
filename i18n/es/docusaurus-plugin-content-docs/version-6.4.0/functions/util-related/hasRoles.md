---
title: '$hasRoles'
description: '$hasRoles check if the provided user has the roles listed in the roles argument.'
id: hasRoles
---

`$hasRoles` check if the provided user has the roles listed in the roles argument.

## Uso

```php
$hasRoles[guildID;userID;...roles]
```

## Parámetros

| Campo      | Tipo   | Parámetros                                      | Requerido |
| ---------- | ------ | ----------------------------------------------- |:---------:|
| servidorID | entero | ID of the guild where the roles are present in. | verdadero |
| usarioID   | entero | ID of the user which has the roles.             | verdadero |
| ...roles   | entero | The roles that will be checked for.             |    sí     |

## Ejemplo(s)

This will return `true` when the user has the listed roles:

```javascript
bot.command({
    name: 'hasRoles',
    code: `
  $hasRoles[$guildID;$authorID;$findRole[Owner]]
  `
});
```
