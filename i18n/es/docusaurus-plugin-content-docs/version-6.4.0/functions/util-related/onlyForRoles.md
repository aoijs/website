---
title: '$onlyForRoles'
description: '$onlyForRoles will check if the user who executed the command has any of the listed roles and return a error message if not.'
id: onlyForRoles
---

`$onlyForRoles` will check if the user who executed the command has any of the listed roles and return a error message if not.

## Modo de uso

```php
$onlyForRoles[...roleIds;error]
```

## Parámetros

| Campo      | Tipo            | Parámetros                                                                           | Requerido |
| ---------- | --------------- | ------------------------------------------------------------------------------------ |:---------:|
| ...roleIds | string, integer | Roles you want to limit the command to.                                              | verdadero |
| error      | consulta        | Error to return when the command was not executed by any user with the listed roles. |    no     |

## Ejemplo(s)

This will limit the command only to the listed channels:

```javascript
bot.command({
    name: "onlyForRoles",
    code: `
    Ok.
    $onlyForRoles[roleID;roleID;You can't use that command!]
    `
});
```