---
title: '$getObject'
description: '$getObject will return the previously created object.'
id: getObject
---

`$getObject` will return the previously created object.

## Uso

```php
$getObject[format?]
```

## Parámetros

| Campo   | Tipo     | Parámetros                                                         | Requerido |
| ------- | -------- | ------------------------------------------------------------------ |:---------:|
| format? | booleano | Format the output? <br /> 1. **true** (default) 2. **false** |    no     |

## Ejemplo(s)

This will return the object created in `$createObject`:

```javascript
bot.command({
    name: "getObject",
    code: `
    $getObject[true]
    $createObject[{"hello": "bye"}]
    `
});
```