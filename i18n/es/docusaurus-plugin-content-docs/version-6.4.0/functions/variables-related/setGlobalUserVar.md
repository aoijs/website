---
title: '$setGlobalUserVar'
description: '$setGlobalUserVar cambiará el valor de una variable global de usuario.'
id: setGlobalUserVar
---

`$setGlobalUserVar` cambiará el valor de una variable global de usuario.

## Uso

```php
$setGlobalUserVar[varname;value;userID?;table?]
```

## Parámetros

| Campo     | Tipo     | Parámetros            | Requerido |
| --------- | -------- | --------------------- |:---------:|
| varname   | consulta | Nombre variable.      | verdadero |
| valor     | consulta | Nuevo valor variable. | verdadero |
| usarioID? | entero   | ID de usuario.        |   falso   |
| tabla?    | string   | Tabla variable.       |   falso   |

## Ejemplo(s)

Esto cambiará el valor de "Ejemplo" a "Este es un valor" para el autor de comandos:

```javascript
bot.command({
    name: "setGlobalUserVar",
    code: `
    $setGlobalUserVar[Example;This is a value;$authorID;main]
    `
});
```