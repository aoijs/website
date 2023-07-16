---
title: '$findInCache'
description: '$findInCache buscará argumentos dados en la caché de tu bot.'
id: findInCache
---

`$findInCache` buscará determinados argumentos en la caché de tu bot.

## Uso

```php
$findInCache[tipo;nombre;prop;valor;buscarTipo?;valor devuelto?]
```

## Parámetros

| Campo           | Tipo     | Parámetros                                                                                                                                          | Requerido |
| --------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |:---------:|
| type            | consulta | Tipo del objeto a buscar.                                                                                                                           | verdadero |
| name            | consulta | Nombre del objeto a buscar.                                                                                                                         | verdadero |
| prop            | string   | Propiedad                                                                                                                                           | verdadero |
| valor           | string   | Valor de la propiedad                                                                                                                               | verdadero |
| buscarTipo?     | cadena   | 1. **includes** <br /> 2. **startsWith** <br /> 3. **endsWith** <br /> 4. **>=**, **==**, **===** (default), **<=**, **<**, **>** |   falso   |
| valor devuelto? | booleano | 1. **true* <br /> 2. **false**                                                                                                                |   falso   |