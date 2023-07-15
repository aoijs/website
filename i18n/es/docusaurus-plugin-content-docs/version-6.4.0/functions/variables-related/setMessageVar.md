---
title: '$setMessageVar'
description: '$setMessageVar will change the value of a given message variable.'
id: setMessageVar
---

`$setMessageVar` will change the value of a given message variable.

## Modo de uso

```php
$setMessageVar[varname;value;messageID?;table?]
```

## Parámetros

| Campo          | Tipo     | Parámetros          | Requerido |
| -------------- | -------- | ------------------- |:---------:|
| varname        | consulta | Variable name.      | verdadero |
| value          | consulta | New Variable value. | verdadero |
| ID de mensaje? | entero   | Mensaje ID.         |   falso   |
| table?         | string   | Variable table.     |   falso   |

## Ejemplo(s)

This will change the value of "Example" to "This is a value":

```javascript
bot.command({
    name: "setMessageVar",
    code: `
    $setMessageVar[Example;This is a value;$messageID;main]
    `
});
```