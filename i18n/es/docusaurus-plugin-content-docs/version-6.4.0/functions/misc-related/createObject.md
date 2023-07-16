---
title: '$createObject'
description: '$createObject creará un nuevo objeto.'
id: createObject
---

`$createObject` creará un nuevo objeto.

## Uso

```php
$createObject[objeto]
```

## Parámetros

| Campo  | Tipo   | Parámetros   | Requerido |
| ------ | ------ | ------------ |:---------:|
| objeto | objeto | Objeto Json. | verdadera |

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