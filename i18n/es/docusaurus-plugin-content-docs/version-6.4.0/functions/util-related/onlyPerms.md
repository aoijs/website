---
title: '$onlyPerms'
description: '$onlyPerms comprobará si el usuario tiene los permisos listados y devolverá un mensaje de error si no lo hace.'
id: onlyPerms
---

`$onlyPerms` comprobará si el usuario tiene los permisos listados y devolverá un mensaje de error si no lo hace.

## Uso

```php
$onlyPerms[...perms;error]
```

## Parámetros

| Campo       | Tipo     | Parámetros                                                         | Requerido |
| ----------- | -------- | ------------------------------------------------------------------ |:---------:|
| ...permisos | consulta | Permiso que requiere el usuario.                                   | verdadero |
| error       | consulta | Error a devolver cuando el usuario no tiene los permisos listados. | verdadero |

Encontrará todos los permisos __[aquí](../../../../../../versioned_docs/version-6.4.0/guides/client/2permissionsintents.md)__.

## Ejemplo(s)

Esto limitará el comando a trabajar sólo cuando el usuario tenga permisos de administrador:

```javascript
bot.command({
    name: "onlyPerms",
    code: `
    Ok.
    $onlyPerms[administrator;You don't have administrator permissions!]
    `
});
```