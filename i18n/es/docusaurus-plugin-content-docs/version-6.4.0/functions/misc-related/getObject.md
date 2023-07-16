---
title: '$getObject'
description: '$getObject devolverá el objeto previamente creado.'
id: getObject
---

`$getObject` devolverá el objeto previamente creado.

## Uso

```php
$getObject[formato?]
```

## Parámetros

| Campo    | Tipo     | Parámetros                                                             | Requerido |
| -------- | -------- | ---------------------------------------------------------------------- |:---------:|
| formato? | booleano | Formato de salida <br /> 1. **true** (por defecto)  2. **false** |   falso   |

## Ejemplo(s)

Esto devolverá el objeto creado en `$createObject`:

```javascript
bot.command({
    name: "getObject",
    code: `
    $getObject[true]
    $createObject[{"hello": "bye"}]
    `
});
```