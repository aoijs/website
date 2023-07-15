---
title: '$httpRequest'
description: '$httpRequest either posts to or retrieves data from an API.'
id: httpRequest
---

`$httpRequest` either posts to or retrieves data from an API.

## Modo de uso

```php
$httpRequest[URL;method;body?;property?;error?;...header?]
```

## Parámetros

| Campo     | Tipo     | Parámetros                                                                                | Requerido |
| --------- | -------- | ----------------------------------------------------------------------------------------- |:---------:|
| URL       | consulta | URL you want to get/send data to/from.                                                    | verdadero |
| method    | consulta | Method <br /> 1. **GET** (default) <br /> 2. **POST** <br /> 3. **PUT** | verdadero |
| body?     | string   | Contenido.                                                                                |   falso   |
| property? | string   | Property to return (get method).                                                          |   falso   |
| error?    | cadena   | Error to return when request fails.                                                       |    no     |
| ...header | cadena   | Header.                                                                                   |   falso   |

## Ejemplo(s)

This will return a random dog fact using the `GET` method:

```javascript
bot.command({
    name: "httpRequest",
    code: `
    $httpRequest[https://some-random-api.ml/facts/dog;GET;;fact;Something went wrong.]
    `
});
```