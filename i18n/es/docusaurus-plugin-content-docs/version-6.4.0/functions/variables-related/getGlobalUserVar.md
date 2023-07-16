---
title: '$getGlobalUserVar'
description: '$getGlobalUserVar will return the value of a given global user variable.'
id: getGlobalUserVar
---

`$getGlobalUserVar` will return the value of a given global user variable.

## Uso

```php
$getGlobalUserVar[varname;userID?;table?]
```

## Parámetros

| Campo     | Tipo     | Parámetros      | Requerido |
| --------- | -------- | --------------- |:---------:|
| varname   | consulta | Variable name.  | verdadero |
| usarioID? | entero   | User ID.        |    no     |
| table?    | string   | Variable table. |   falso   |

## Ejemplo(s)

This will return the value of a variable called "Example":

```javascript
bot.command({
    name: "getGlobalUserVar",
    code: `
    $getGlobalUserVar[Example;$authorID;main]
    `
});
```