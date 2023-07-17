---
title: '$isVariableExist'
description: '$isVariableExist comprueba si existe una variable dada en una tabla determinada.'
id: isVariableExist
---

`$isVariableExist` comprueba si existe una variable dada en una tabla determinada.

## Uso

```php
$isVariableExist[variable;table?]
```

## Parámetros

| Campo    | Tipo     | Parámetros             | Requerido |
| -------- | -------- | ---------------------- |:---------:|
| variable | consulta | El nombre de variable. | verdadero |
| tabla?   | consulta | El nombre de la tabla. |    no     |

## Ejemplo(s)

Esto será verdadero o falso dependiendo de si existe una variable llamada `Ejemplo`:

```javascript
bot.command({
    name: 'isVariableExist',
    code: `
  $isVariableExist[Example;main]
  `
});
```
