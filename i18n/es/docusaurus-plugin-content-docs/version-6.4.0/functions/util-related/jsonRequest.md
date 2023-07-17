---
title: '$jsonRequest'
description: '$jsonRequest enviará una solicitud GET a una URL determinada.'
id: jsonRequest
---

`$jsonRequest` enviará una solicitud GET a una URL determinada.

## Uso

```php
$jsonRequest[URL;property?;error?;...header?]
```

## Parámetros

| Campo       | Tipo     | Parámetros                                        | Requerido |
| ----------- | -------- | ------------------------------------------------- |:---------:|
| URL         | consulta | URL a la que quieres obtener/enviar datos a/desde | verdadero |
| ¿propiedad? | consulta | Propiedad a devolver (obtener método)             |    no     |
| ¿error?     | string   | Error de retorno cuando la solicitud falla        |   falso   |
| ...cabecera | string   | Cabeza.                                           |   falso   |

## Ejemplo(s)

Esto devolverá un hecho al azar:

```javascript
bot.command({
    name: "jsonRequest",
    code: `
    $jsonRequest[https://some-random-api.ml/facts/dog;fact;Something went wrong.]
    `
});
```