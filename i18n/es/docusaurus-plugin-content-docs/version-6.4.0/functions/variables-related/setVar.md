---
title: '$setVar'
description: '$setVar will change the value of a given global variable.'
id: setVar
---

`$setVar` will change the value of a given global variable.

## Uso

```php
$setVar[varname;value;table?]
```

## Parámetros

| Campo   | Tipo     | Parámetros          | Requerido |
| ------- | -------- | ------------------- |:---------:|
| Varname | consulta | Variable name.      | verdadero |
| Value   | consulta | New Variable value. | verdadero |
| Table?  | string   | Variable table.     |   falso   |

## Ejemplo(s)

This will change the value of "Example" to "This is a value":

```javascript
bot.command({
    name: "setVar",
    code: `
    $setVar[Example;This is a value;main]
    `
});
```