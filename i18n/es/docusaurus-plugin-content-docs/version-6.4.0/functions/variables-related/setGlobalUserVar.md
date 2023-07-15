---
title: '$setGlobalUserVar'
description: '$setGlobalUserVar will change the value of a given global user variable.'
id: setGlobalUserVar
---

`$setGlobalUserVar` will change the value of a given global user variable.

## Modo de uso

```php
$setGlobalUserVar[varname;value;userID?;table?]
```

## Parámetros

| Campo     | Tipo     | Parámetros          | Requerido |
| --------- | -------- | ------------------- |:---------:|
| varname   | consulta | Variable name.      | verdadero |
| value     | consulta | New Variable value. | verdadero |
| usarioID? | entero   | User ID.            |   falso   |
| table?    | string   | Variable table.     |   falso   |

## Ejemplo(s)

This will change the value of "Example" to "This is a value" for the command author:

```javascript
bot.command({
    name: "setGlobalUserVar",
    code: `
    $setGlobalUserVar[Example;This is a value;$authorID;main]
    `
});
```