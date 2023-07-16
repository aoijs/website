---
title: '$resetUserVar'
description: '$resetUserVar establecerá una variable de usuario determinada a su valor predeterminado de un gremio determinado.'
id: resetUserVar
---

`$resetUserVar` establecerá una variable de usuario determinada a su valor predeterminado de un gremio dado.

## Uso

```php
$resetUserVar[varname;guildID?;table?]
```

## Parámetros

| Campo       | Tipo     | Parámetros       | Requerido |
| ----------- | -------- | ---------------- |:---------:|
| varname     | consulta | Nombre variable. | verdadero |
| servidorID? | entero   | ID del gremio.   |    no     |
| tabla?      | string   | Tabla variable.  |   falso   |

## Ejemplo(s)

Esto restablecerá una variable llamada "Ejemplo":

```javascript
bot.command({
    name: "resetUserVar",
    code: `
    $resetUserVar[Example;$guildID;main]
    `
});
```