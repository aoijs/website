---
title: '$onlyForGuilds'
description: '$onlyForGuilds comprobará si el comando fue ejecutado en uno de los gremios listados y devolverá un mensaje de error en caso contrario.'
id: onlyForGuilds
---

`$onlyForGuilds` comprobará si el comando fue ejecutado en uno de los gremios listados y devolverá un mensaje de error en caso contrario.

## Uso

```php
$onlyForGuilds[...guildIds;error]
```

## Parámetros

| Campo       | Tipo            | Parámetros                                                                              | Requerido |
| ----------- | --------------- | --------------------------------------------------------------------------------------- |:---------:|
| ...guildIds | string, integer | Guilds a los que quieres limitar el comando.                                            | verdadero |
| error       | consulta        | Error a devolver cuando el comando no fue ejecutado en ninguno de los gremios listados. | verdadero |

## Ejemplo(s)

Esto limitará el comando sólo a los gremios listados:

```javascript
bot.command({
    name: "onlyForGuilds",
    code: `
    Ok.
    $onlyForGuilds[guildID;guildID;You can't use that command here!]
    `
});
```