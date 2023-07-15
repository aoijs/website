---
title: '$setChannelVar'
description: '$setChannelVar will change the value of a given channel variable.'
id: setChannelVar
---

`$setChannelVar` will change the value of a given channel variable.

## Modo de uso

```php
$setChannelVar[varname;value;channelID?;table?]
```

## Parámetros

| Campo    | Tipo     | Parámetros          | Requerido |
| -------- | -------- | ------------------- |:---------:|
| varname  | consulta | Variable name.      | verdadero |
| value    | consulta | New Variable value. | verdadero |
| canalID? | entero   | ID del canal.       |   falso   |
| table?   | string   | Variable table.     |   falso   |

## Ejemplo(s)

This will change the value of "Example" to "This is a value":

```javascript
bot.command({
    name: "setChannelVar",
    code: `
    $setChannelVar[Example;This is a value;$channelID;main]
    `
});
```