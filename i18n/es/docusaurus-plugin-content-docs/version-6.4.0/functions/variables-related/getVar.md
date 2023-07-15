---
title: '$getVar'
description: '$getVar will return the value of a global variable.'
id: getVar
---

`$getVar` will return the value of a global variable

## Modo de uso

```php
$getVar[varname;table?]
```

## Parámetros

| Campo   | Tipo     | Parámetros      | Requerido |
| ------- | -------- | --------------- |:---------:|
| varname | consulta | Variable name.  | verdadero |
| table?  | consulta | Variable table. |    no     |

## Ejemplo(s)

This will return the value of a variable called "Example":

```javascript
bot.command({
    name: "getVar",
    code: `
    $getVar[Example;main]
    `
});
```