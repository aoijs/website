---
title: $onlyForChannels
description: '$onlyForChannels comprobará si el comando fue ejecutado en uno de los canales listados y devolverá un mensaje de error en caso contrario.'
id: onlyForChannels
---

`$onlyForChannels` comprobará si el comando fue ejecutado en uno de los canales listados y devolverá un mensaje de error si no.

## Uso

```php
$onlyForChannels[...categoryIds;error]
```

## Parámetros

| Campo       | Tipo            | Parámetros                                                                              | Requerido |
| ----------- | --------------- | --------------------------------------------------------------------------------------- |:---------:|
| ...canalIds | string, integer | Canales a los que quieres limitar el comando.                                           | verdadero |
| error       | consulta        | Error a devolver cuando el comando no fue ejecutado en ninguno de los canales listados. | verdadero |

## Ejemplo(s)

Esto limitará el comando sólo a los canales listados:

```javascript
bot.command({
    name: "onlyForChannels",
    code: `
    Ok.
    $onlyForChannels[channelID;channelID;You can't use that command here!]
    `
});
```