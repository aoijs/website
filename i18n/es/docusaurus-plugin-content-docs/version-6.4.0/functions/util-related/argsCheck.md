---
title: '$argsCheck'
description: '$argsCheck will check the arguments of what the user typed and the required one, if requirements didn''t meet, it will return an error message.'
id: argsCheck
---

`$argsCheck` will check the arguments of user typed and the required one, if requirements didn't meet, it will return an error message.

## Modo de uso

```php
$argsCheck[condition;errorMessage]
```

## Parámetros

| Campo        | Tipo   | Descripción                              | Requerido |
| ------------ | ------ | ---------------------------------------- |:---------:|
| condition    | cadena | Condition to be made.                    |    sí     |
| errorMessage | string | Error message if condition did not meet. |    sí     |

#### Valid Mathematical Operators

| Operator | Mathematical Expression  |
| -------- | ------------------------ |
| ==       | es igual a               |
| !=       | not equal to             |
| <=       | less than or equal to    |
| \>=     | greater than or equal to |
| \>      | greater than             |
| <        | less than                |
| \       | \|     | logical OR     |
| &&       | logical conjunction      |

## Ejemplo(s)

This returns: Greater than 2 arguments if condition met, else it will return an error message.

```javascript
bot.command({
    name: "argsCheck",
    code: `
  You have more than two arguments, nice!

  $argsCheck[>2;You have less than two arguments!]
  `
});
```
