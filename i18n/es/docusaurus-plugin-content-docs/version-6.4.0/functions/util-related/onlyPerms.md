---
title: '$onlyPerms'
description: '$onlyPerms will check if the user has the listed permission and return a error message if not.'
id: onlyPerms
---

`$onlyPerms` will check if the user has the listed permission and return a error message if not.

## Modo de uso

```php
$onlyPerms[...perms;error]
```

## Parámetros

| Campo       | Tipo     | Parámetros                                                    | Requerido |
| ----------- | -------- | ------------------------------------------------------------- |:---------:|
| ...permisos | consulta | Permission the user requires.                                 | verdadero |
| error       | consulta | Error to return when the user has not the listed permissions. | verdadero |

Encontrará todos los permisos __[aquí](../../guides/client/2permissionsintents.md)__.

## Ejemplo(s)

This will limit the command to work only when the user has administrator permissions:

```javascript
bot.command({
    name: "onlyPerms",
    code: `
    Ok.
    $onlyPerms[administrator;You don't have administrator permissions!]
    `
});
```