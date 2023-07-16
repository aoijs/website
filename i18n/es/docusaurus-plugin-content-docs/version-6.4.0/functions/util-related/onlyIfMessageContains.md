---
title: '$onlyIfMessageContains'
description: '$onlyIfMessageContains will check if the message contains the given text and if not return a error message.'
id: onlyIfMessageContains
---

`$onlyIfMessageContains` will check if the message contains the given text and if not return a error message.

## Uso

```php
$onlyIfMessageContains[content;...text;error]
```

## Parámetros

| Campo     | Tipo     | Parámetros                                   | Requerido |
| --------- | -------- | -------------------------------------------- |:---------:|
| contenido | consulta | Message which should contain the given text. | verdadero |
| text      | consulta | Text to check for in the message.            | verdadero |
| error     | string   | Error to return.                             |    sí     |

## Ejemplo(s)

This will return the error message as "aoi.js" does not appear in "Hello!":

```javascript
bot.command({
    name: "onlyIfMessageContains",
    code: `
    Ok.
    $onlyIfMessageContains[Hello!;aoi.js;Couldn't find that word!]
    `
});
```