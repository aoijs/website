---
title: '$resetGlobalUserVar'
description: '$resetGlobalUserVar will set a given global user variable to its default value.'
id: resetGlobalUserVar
---

`$resetGlobalUserVar` will set a given global user variable to its default value.

## Uso

```php
$resetGlobalUserVar[varname;table?]
```

## Parámetros

| Campo   | Tipo     | Parámetros      | Requerido |
| ------- | -------- | --------------- |:---------:|
| varname | consulta | Variable name.  | verdadero |
| table?  | consulta | Variable table. |    no     |

## Ejemplo(s)

This will reset a variable called "Example":

```javascript
bot.command({
    name: "resetGlobalUserVar",
    code: `
    $resetGlobalUserVar[Example;main]
    `
});
```