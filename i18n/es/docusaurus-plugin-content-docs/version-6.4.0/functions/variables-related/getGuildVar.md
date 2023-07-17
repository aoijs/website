---
title: '$getGuildVar'
description: '$getGuildVar devolverá el valor de una variable de guild determinada.'
id: getGuildVar
---

`$getGuildVar` devolverá el valor de una variable de gremio.

## Uso

```php
$getGuildVar[varname;guildID?;table?]
```

## Parámetros

| Campo       | Tipo     | Parámetros       | Requerido |
| ----------- | -------- | ---------------- |:---------:|
| varname     | consulta | Nombre variable. | verdadero |
| servidorID? | entero   | ID del gremio.   |    no     |
| tabla?      | string   | Tabla variable.  |   falso   |

## Ejemplo(s)

Esto devolverá el valor de una variable llamada "Ejemplo":

```javascript
bot.command({
    name: "getGuildVar",
    code: `
    $getGuildVar[Example;$guildID;main]
    `
});
```