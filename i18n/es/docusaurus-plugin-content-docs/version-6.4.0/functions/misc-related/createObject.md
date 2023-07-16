---
title: '$createObject'
description: '$createObject will create a new object.'
id: createObject
---

`$createObject` will create a new object.

## Uso

```php
$createObject[object]
```

## Parámetros

| Campo  | Tipo   | Parámetros   | Requerido |
| ------ | ------ | ------------ |:---------:|
| object | object | Json object. | verdadera |

## Ejemplo(s)

```javascript
bot.command({
    name: "createObject",
    code: `
  $createObject[{
    "hello": "bye",
    "bye": "hello"
  }]
  `
});
```