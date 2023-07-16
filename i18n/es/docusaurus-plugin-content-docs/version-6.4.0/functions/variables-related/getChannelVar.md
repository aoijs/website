---
title: '$getChannelVar'
description: '$getChannelVar will return the value of a given channel variable.'
id: getChannelVar
---

`$getChannelVar` will return the value of a given channel variable.

## Uso

```php
$getChannelVar[varname;channelID?;table?]
```

## Parámetros

| Campo    | Tipo     | Parámetros      | Requerido |
| -------- | -------- | --------------- |:---------:|
| varname  | consulta | Variable name.  | verdadero |
| canalID? | entero   | ID del canal.   |    no     |
| table?   | string   | Variable table. |   falso   |

## Ejemplo(s)

This will return the value of a variable called "Example":

```javascript
bot.command({
    name: "getChannelVar",
    code: `
    $getChannelVar[Example;$channelID;main]
    `
});
```