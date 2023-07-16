---
title: '$setUserVar'
description: '$setUserVar will change the value of a given user variable.'
id: setUserVar
---

`$setUserVar` will change the value of a given user variable.

## Uso

```php
$setUserVar[varname;value;userID?;id?;table?]
```

## Parámetros

| Campo     | Tipo     | Parámetros                                      | Requerido |
| --------- | -------- | ----------------------------------------------- |:---------:|
| varname   | consulta | Variable name.                                  | verdadero |
| value     | consulta | New Variable value.                             | verdadero |
| usarioID? | entero   | User ID.                                        |   falso   |
| id?       | string   | 1. **specific guild id** <br /> 2. **dm** |   falso   |
| table?    | cadena   | Variable table.                                 |    no     |

## Ejemplo(s)

This will change the value of "Example" to "This is a value":

```javascript
bot.command({
    name: "setUserVar",
    code: `
    $setUserVar[Example;This is a value;$authorID;$guildID;main]
    `
});
```