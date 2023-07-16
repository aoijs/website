---
title: '$jsonRequest'
description: '$jsonRequest will send a GET request to a given URL.'
id: jsonRequest
---

`$jsonRequest` will send a GET request to a given URL.

## Uso

```php
$jsonRequest[URL;property?;error?;...header?]
```

## Parámetros

| Campo     | Tipo     | Parámetros                            | Requerido |
| --------- | -------- | ------------------------------------- |:---------:|
| URL       | consulta | URL you want to get/send data to/from | verdadero |
| property? | consulta | Property to return (get method)       |    no     |
| error?    | string   | Error to return when request fails    |   falso   |
| ...header | string   | Header.                               |   falso   |

## Ejemplo(s)

This will return a random dog fact:

```javascript
bot.command({
    name: "jsonRequest",
    code: `
    $jsonRequest[https://some-random-api.ml/facts/dog;fact;Something went wrong.]
    `
});
```