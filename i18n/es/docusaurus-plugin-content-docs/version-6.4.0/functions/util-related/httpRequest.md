---
title: '$httpRequest'
description: '$httpRequest publica o recupera datos de una API.'
id: httpRequest
---

`$httpRequest` publica o recupera datos de una API.

## Uso

```php
$httpRequest[URL;método;cuerpo?;propiedad?;error?;...cabecera?]
```

## Parámetros

| Campo       | Tipo     | Parámetros                                                                                    | Requerido |
| ----------- | -------- | --------------------------------------------------------------------------------------------- |:---------:|
| URL         | consulta | URL desde la que quieres obtener/enviar datos.                                                | verdadero |
| método      | consulta | Método <br /> 1. **GET** (por defecto) <br /> 2. **POST** <br /> 3. **PUT** | verdadero |
| cuerpo?     | string   | Contenido.                                                                                    |   falso   |
| propiedad?  | string   | Propiedad a devolver (obtener método).                                                        |   falso   |
| error?      | cadena   | Error de retorno cuando la solicitud falla.                                                   |   falso   |
| ...cabecera | cadena   | Cabecera.                                                                                     |   falso   |

## Ejemplo(s)

Esto devolverá un hecho perro aleatorio usando el método `GET`:

```javascript
bot.command({
    name: "httpRequest",
    code: `
    $httpRequest[https://some-random-api.ml/facts/dog;GET;;fact;Something went wrong.]
    `
});
```