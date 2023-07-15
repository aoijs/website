---
title: '$onlyClientPerms'
description: '$onlyClientPerms comprobará si el bot tiene el permiso indicado y devolverá un mensaje de error en caso contrario.'
id: onlyClientPerms
---

`$onlyClientPerms` comprobará si el bot tiene el permiso indicado y devolverá un mensaje de error en caso contrario.

## Modo de uso

```php
$onlyClientPerms[...permisos;error]
```

## Parámetros

| Campo       | Tipo   | Descripción                                                    | Requerido |
| ----------- | ------ | -------------------------------------------------------------- |:---------:|
| ...permisos | string | Permiso que requiere el bot.                                   |    sí     |
| error       | string | Error a devolver cuando el bot no tiene los permisos listados. |    sí     |

Encontrará todos los permisos __[aquí](../../guides/Client/2permissionsintents.md)__.

## Ejemplo(s)

Esto limitará el comando para que funcione sólo cuando el Bot tenga permisos de administrador:

```javascript
bot.command({
    name: "onlyClientPerms",
    code: `
    Ok.
    $onlyClientPerms[administrator;No tengo permisos de administrador.]
    `
});
```
