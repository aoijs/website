---
title: '$setChannelVar'
description: '$setChannelVar cambiará el valor de una variable de canal determinada.'
id: setChannelVar
---

`$setChannelVar` cambiará el valor de una variable de canal determinada.

## Uso

```php
$setChannelVar[varname;value;channelID?;table?]
```

## Parámetros

| Campo    | Tipo     | Parámetros            | Requerido |
| -------- | -------- | --------------------- |:---------:|
| varname  | consulta | Nombre variable.      | verdadero |
| valor    | consulta | Nuevo valor variable. | verdadero |
| canalID? | entero   | ID del canal.         |   falso   |
| tabla?   | string   | Tabla variable.       |   falso   |

## Ejemplo(s)

Esto cambiará el valor de "Ejemplo" a "Este es un valor":

```javascript
bot.command({
    name: "setChannelVar",
    code: `
    $setChannelVar[Example;This is a value;$channelID;main]
    `
});
```