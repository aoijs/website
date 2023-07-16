---
title: '$setUserVar'
description: '$setUserVar cambiará el valor de una variable de usuario determinada.'
id: setUserVar
---

`$setUserVar` cambiará el valor de una variable de usuario.

## Uso

```php
$setUserVar[varname;value;userID?;id?;table?]
```

## Parámetros

| Campo     | Tipo     | Parámetros                                           | Requerido |
| --------- | -------- | ---------------------------------------------------- |:---------:|
| varname   | consulta | Nombre variable.                                     | verdadero |
| valor     | consulta | Nuevo valor variable.                                | verdadero |
| usarioID? | entero   | ID de usuario.                                       |   falso   |
| ¿id?      | string   | 1. **id de guild específico** <br /> 2. **dm** |   falso   |
| tabla?    | cadena   | Tabla variable.                                      |    no     |

## Ejemplo(s)

Esto cambiará el valor de "Ejemplo" a "Este es un valor":

```javascript
bot.command({
    name: "setUserVar",
    code: `
    $setUserVar[Example;This is a value;$authorID;$guildID;main]
    `
});
```