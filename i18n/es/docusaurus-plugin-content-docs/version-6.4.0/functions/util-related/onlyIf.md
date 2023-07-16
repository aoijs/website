---
title: '$onlyIf'
description: '$onlyIf will check for a condition and return a error message if that condition does not match.'
id: onlyIf
---

`$onlyIf` will check for a condition and return a error message if that condition does not match.

## Uso

```php
$onlyIf[condition;error]
```

## Parámetros

| Campo     | Tipo     | Parámetros                                     | Requerido |
| --------- | -------- | ---------------------------------------------- |:---------:|
| condition | consulta | Condition to check.                            | verdadero |
| error     | consulta | Error to return when condition does not match. |    no     |

## Ejemplo(s)

This will return the error message as 5 does not equal to 3:

```javascript
bot.command({
    name: "onlyIf",
    code: `
    Ok.
    $onlyIf[5==3;That's wrong!]
    `
});
```