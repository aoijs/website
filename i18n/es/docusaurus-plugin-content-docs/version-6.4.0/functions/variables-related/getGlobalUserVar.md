---
title: '$getGlobalUserVar'
description: '$getGlobalUserVar devolverá el valor de una variable global de usuario.'
id: getGlobalUserVar
---

`$getGlobalUserVar` devolverá el valor de una variable global de usuario.

## Uso

```php
$getGlobalUserVar[varname;userID?;table?]
```

## Parámetros

| Campo     | Tipo     | Parámetros       | Requerido |
| --------- | -------- | ---------------- |:---------:|
| varname   | consulta | Nombre variable. | verdadero |
| usarioID? | entero   | ID de usuario.   |    no     |
| tabla?    | string   | Tabla variable.  |   falso   |

## Ejemplo(s)

Esto devolverá el valor de una variable llamada "Ejemplo":

```javascript
bot.command({
    name: "getGlobalUserVar",
    code: `
    $getGlobalUserVar[Example;$authorID;main]
    `
});
```