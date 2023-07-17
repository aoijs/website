---
title: '$onlyIfMessageContains'
description: '$onlyIfMessageContains comprobará si el mensaje contiene el texto dado y si no devuelve un mensaje de error.'
id: onlyIfMessageContains
---

`$onlyIfMessageContains` comprobará si el mensaje contiene el texto dado y si no devuelve un mensaje de error.

## Uso

```php
$onlyIfMessageContains[content;...text;error]
```

## Parámetros

| Campo     | Tipo     | Parámetros                               | Requerido |
| --------- | -------- | ---------------------------------------- |:---------:|
| contenido | consulta | Mensaje que debe contener el texto dado. | verdadero |
| text      | consulta | Texto a buscar en el mensaje.            | verdadero |
| error     | string   | Error de devolución.                     |    sí     |

## Ejemplo(s)

Esto devolverá el mensaje de error porque "aoi.js" no aparece en "¡Hola!":

```javascript
bot.command({
    name: "onlyIfMessageContains",
    code: `
    Ok.
    $onlyIfMessageContains[Hello!;aoi.js;Couldn't find that word!]
    `
});
```