---
title: '$isVariableExist'
description: '$isVariableExist checks if a given variable exists in a given table.'
id: isVariableExist
---

`$isVariableExist` checks if a given variable exists in a given table.

## Modo de uso

```php
$isVariableExist[variable;table?]
```

## Parámetros

| Campo    | Tipo     | Parámetros         | Requerido |
| -------- | -------- | ------------------ |:---------:|
| variable | consulta | The variable name. | verdadero |
| table?   | consulta | The table name.    |    no     |

## Ejemplo(s)

This will either true or false depending on if a variable called `Example` exists:

```javascript
bot.command({
    name: 'isVariableExist',
    code: `
  $isVariableExist[Example;main]
  `
});
```
