---
title: '$getObjectProperty'
description: '$getObjectProperty will return a object property of a given object.'
id: getObjectProperty
---

`$getObjectProperty` will return a object property of a given object.

## Uso

```php
$getObjectProperty[name]
```

## Parámetros

| Campo  | Tipo   | Parámetros                   | Requerido |
| ------ | ------ | ---------------------------- |:---------:|
| nombre | string | Name of the object property. | verdadera |

## Ejemplo(s)

This will return the object property of "hello" created in `$createObject`:

```javascript
bot.command({
    name: "getObjectProperty",
    code: `
    $getObjectProperty[hello]
    $createObject[{"hello": "bye"}]
    `
});
```