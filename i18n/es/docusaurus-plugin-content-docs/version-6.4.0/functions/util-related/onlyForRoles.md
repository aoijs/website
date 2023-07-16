---
title: '$onlyForRoles'
description: '$onlyForRoles comprobará si el usuario que ejecutó el comando tiene alguno de los roles listados y devolverá un mensaje de error si no lo hace.'
id: onlyForRoles
---

`$onlyForRoles` comprobará si el usuario que ejecutó el comando tiene alguno de los roles listados y devolverá un mensaje de error si no lo hace.

## Uso

```php
$onlyForRoles[...roleIds;error]
```

## Parámetros

| Campo      | Tipo            | Parámetros                                                                                     | Requerido |
| ---------- | --------------- | ---------------------------------------------------------------------------------------------- |:---------:|
| ...roleIds | string, integer | Los roles a los que desea limitar el comando.                                                  | verdadero |
| error      | consulta        | Error a devolver cuando el comando no fue ejecutado por ningún usuario con los roles listados. |    no     |

## Ejemplo(s)

Esto limitará el comando sólo a los canales listados:

```javascript
bot.command({
    name: "onlyForRoles",
    code: `
    Ok.
    $onlyForRoles[roleID;roleID;You can't use that command!]
    `
});
```