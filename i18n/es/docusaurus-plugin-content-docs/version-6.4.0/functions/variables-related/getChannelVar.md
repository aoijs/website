---
title: '$getChannelVar'
description: '$getChannelVar devolverá el valor de una variable de canal determinada.'
id: getChannelVar
---

`$getChannelVar` devolverá el valor de una variable de canal determinada.

## Uso

```php
$getChannelVar[varname;channelID?;table?]
```

## Parámetros

| Campo    | Tipo     | Parámetros       | Requerido |
| -------- | -------- | ---------------- |:---------:|
| varname  | consulta | Nombre variable. | verdadero |
| canalID? | entero   | ID del canal.    |    no     |
| tabla?   | string   | Tabla variable.  |   falso   |

## Ejemplo(s)

Esto devolverá el valor de una variable llamada "Ejemplo":

```javascript
bot.command({
    name: "getChannelVar",
    code: `
    $getChannelVar[Example;$channelID;main]
    `
});
```