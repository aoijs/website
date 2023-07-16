---
title: '$getUserVar'
description: '$getUserVar devolverá el valor de una variable de usuario determinada.'
id: getUserVar
---

`$getUserVar` devolverá el valor de una variable de usuario determinada.

## Uso

```php
$getUserVar[varname;userID?;id?;table?]
```

## Parámetros

| Campo     | Tipo            | Parámetros                                           | Requerido |
| --------- | --------------- | ---------------------------------------------------- |:---------:|
| varname   | consulta        | Nombre variable.                                     | verdadero |
| usarioID? | entero          | ID de usuario.                                       |    no     |
| ¿id?      | string, integer | 1. **id de guild específico** <br /> 2. **dm** |   falso   |
| tabla?    | string          | Tabla variable.                                      |   falso   |

## Ejemplo(s)

Esto devolverá el valor de una variable llamada "Ejemplo":

```javascript
bot.command({
    name: "getUserVar",
    code: `
    $getUserVar[Example;$authorID;$guildID;main]
    `
});
```