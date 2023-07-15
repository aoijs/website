---
title: '$randomString'
description: '$randomString will generate a random string.'
id: randomString
---

`$randomString` will generate a random string.

## Modo de uso

```php
$randomString[range;diffExec?]
```

## Parámetros

| Campo     | Tipo    | Parámetros                            | Requerido |
| --------- | ------- | ------------------------------------- |:---------:|
| range     | número  | Range of the random generated string. | verdadero |
| diffExec? | boolean |                                       |    no     |

## Ejemplo(s)

This will return a random string of twenty characters:

```javascript
bot.command({
    name: 'randomString',
    code: `
  $randomString[20]
  `
});
```
