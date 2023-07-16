---
title: '$isValidObject'
description: '$isValidObject checks if the given json is a valid object.'
id: isValidObject
---

`$isValidObject` checks if the given json is a valid object.

## Uso

```php
$isValidObject[object]
```

## Parámetros

| Campo  | Tipo   | Parámetros   | Requerido |
| ------ | ------ | ------------ |:---------:|
| object | object | JSON object. | verdadera |

## Ejemplo(s)

This will return `true` as the given object is a valid JSON object:

```javascript
bot.command({
    name: 'isValidObject',
    code: `
  $isValidObject[{"name":"Leref", "aoijs":"nice"}]
  `
});
```
