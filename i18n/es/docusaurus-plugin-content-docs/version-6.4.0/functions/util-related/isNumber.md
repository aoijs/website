---
title: '$isNumber'
description: '$isNumber comprobará si el argumento dado es un número.'
id: isNumber
---

`$isNumber` comprobará si el argumento dado es un número.

## Uso

```php
$isNumber[num]
```

## Parámetros

| Campo | Tipo   | Parámetros                                     | Requerido |
| ----- | ------ | ---------------------------------------------- |:---------:|
| num   | número | Argumento que desea comprobar si es un número. | verdadera |

## Ejemplo(s)

Esto devolverá `verdadero` como `255` es un número válido:

```javascript
bot.command({
    name: 'isNumber',
    code: `
  $isNumber[255]
  `
});
```
