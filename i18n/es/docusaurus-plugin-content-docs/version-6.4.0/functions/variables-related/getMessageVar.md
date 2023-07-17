---
title: '$getMessageVar'
description: '$getMessageVar devolverá el valor de una variable de mensaje determinada.'
id: getMessageVar
---

`$getMessageVar` devolverá el valor de una variable de mensaje determinada.

## Uso

```php
$getMessageVar[varname;guildID?;table?]
```

## Parámetros

| Campo          | Tipo     | Parámetros       | Requerido |
| -------------- | -------- | ---------------- |:---------:|
| varname        | consulta | Nombre variable. | verdadero |
| ID de mensaje? | entero   | mensaje ID       |    no     |
| tabla?         | string   | Tabla variable.  |   falso   |

## Ejemplo(s)

Esto devolverá el valor de una variable llamada "Ejemplo":

```javascript
bot.command({
    name: "getMessageVar",
    code: `
    $getMessageVar[Example;$messageID;main]
    `
});
```