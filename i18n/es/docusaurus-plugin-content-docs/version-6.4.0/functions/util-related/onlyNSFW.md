---
title: '$onlyNSFW'
description: '$onlyNSFW comprobará si el comando fue ejecutado en un canal NSFW y devolverá un mensaje de error en caso contrario.'
id: onlyNSFW
---

`$onlyNSFW` comprobará si el comando fue ejecutado en un canal NSFW y devolverá un mensaje de error si no lo hace.

## Uso

```php
$onlyNSFW[error?]
```

## Parámetros

| Campo | Tipo   | Parámetros                                                             | Requerido |
| ----- | ------ | ---------------------------------------------------------------------- |:---------:|
| error | string | Error al devolver cuando el comando no fue ejecutado en un canal NSFW. | verdadera |

## Ejemplo(s)

Esto limitará el comando sólo a los canales NSFW:

```javascript
bot.command({
    name: "onlyNSFW",
    code: `
    Ok.
    $onlyNSFW[You can't use that command here!]
    `
});
```