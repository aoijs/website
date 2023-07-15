---
title: '$getMessageVar'
description: '$getMessageVar will return the value of a given message variable.'
id: getMessageVar
---

`$getMessageVar` will return the value of a given message variable.

## Modo de uso

```php
$getMessageVar[varname;guildID?;table?]
```

## Parámetros

| Campo          | Tipo     | Parámetros      | Requerido |
| -------------- | -------- | --------------- |:---------:|
| varname        | consulta | Variable name.  | verdadero |
| ID de mensaje? | entero   | mensaje ID      |    no     |
| table?         | string   | Variable table. |   falso   |

## Ejemplo(s)

This will return the value of a variable called "Example":

```javascript
bot.command({
    name: "getMessageVar",
    code: `
    $getMessageVar[Example;$messageID;main]
    `
});
```