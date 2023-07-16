---
title: '$hasAnyRole'
description: '$hasAnyRole will check if the provided user has any of the roles listed in the roles argument.'
id: hasAnyRole
---

`$hasAnyRole` will check if the provided user has any of the roles listed in the roles argument.

## Uso

```php
$hasAnyRole[guildID;userID;...roles]
```

## Parámetros

| Campo      | Tipo   | Parámetros                                      | Requerido |
| ---------- | ------ | ----------------------------------------------- |:---------:|
| servidorID | entero | ID of the guild where the roles are present in. | verdadero |
| usarioID   | entero | ID of the user.                                 | verdadero |
| ...roles   | entero | The roles that will be checked for.             |    sí     |

## Ejemplo(s)

This will return `true` when the user has any of the listed roles:

```javascript
bot.command({
    name: 'hasAnyRole',
    code: `
  $hasAnyRole[$guildID;$authorID;$findRole[Owner];$findRole[Admin]]
  `
});
```
