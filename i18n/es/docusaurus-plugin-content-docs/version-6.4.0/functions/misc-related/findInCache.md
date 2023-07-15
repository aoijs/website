---
title: '$findInCache'
description: '$findInCache will search for given arguments in your bot''s cache.'
id: findInCache
---

`$findInCache` will search for given arguments in your bot's cache.

## Modo de uso

```php
$findInCache[type;name;prop;value;findType?;returnValue?]
```

## Parámetros

| Campo        | Tipo     | Parámetros                                                                                                                                          | Requerido |
| ------------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |:---------:|
| type         | consulta | Type of the object to search.                                                                                                                       | verdadero |
| name         | consulta | Name of the object to search.                                                                                                                       | verdadero |
| prop         | string   | Property.                                                                                                                                           |    sí     |
| value        | string   | Property value.                                                                                                                                     |    sí     |
| findType?    | cadena   | 1. **includes** <br /> 2. **startsWith** <br /> 3. **endsWith** <br /> 4. **>=**, **==**, **===** (default), **<=**, **<**, **>** |    no     |
| returnValue? | booleano | 1. **true* <br /> 2. **false**                                                                                                                |   falso   |