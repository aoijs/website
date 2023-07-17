---
title: '$onlyForIDs'
description: '$onlyForIDs comprobará si el comando fue ejecutado por cualquier usuario de los identificadores de usuario listados y devolverá un error si no lo hace.'
id: onlyForIDs
---

`$onlyForIDs` comprobará si el comando fue ejecutado por cualquier usuario de los ID de usuario listados y devolverá un error si no lo hace.

## Uso

```php
$onlyForIDs[...userIds;error]
```

## Parámetros

| Campo      | Tipo            | Parámetros                                                                           | Requerido |
| ---------- | --------------- | ------------------------------------------------------------------------------------ |:---------:|
| ...userIds | string, integer | Usuarios a los que desea limitar el comando.                                         | verdadero |
| error      | consulta        | Error al devolver cuando el comando no fue ejecutado por y de los usuarios listados. | verdadero |

## Ejemplo(s)

Esto limitará el comando sólo a los desarrolladores de bot:

```javascript
bot.command({
    name: "onlyForIDs",
    code: `
    Ok.
    $onlyForIDs[$botOwnerID;You can't use that command!]
    `
});
```