---
title: '$setCacheData'
description: '$setCacheData will modify given cache data.'
id: setCacheData
---

`$setCacheData` will modify given cache data.

## Uso

```php
$setCacheData[type;cacheName;cacheKey;cacheValue]
```

## Parámetros

| Campo      | Tipo     | Parámetros   | Requerido |
| ---------- | -------- | ------------ |:---------:|
| type       | consulta | Cache type.  | verdadero |
| cacheName  | consulta | Cache name.  | verdadero |
| cacheKey   | string   | Cache key.   |    sí     |
| cacheValue | string   | Cache value. |    sí     |