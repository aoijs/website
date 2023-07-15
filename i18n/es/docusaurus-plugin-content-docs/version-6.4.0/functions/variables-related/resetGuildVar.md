---
title: '$resetGuildVar'
description: '$resetGuildVar will set a given guild variable to its default value.'
id: resetGuildVar
---

`$resetGuildVar` will set a given guild variable to its default value.

## Modo de uso

```php
$resetGuildVar[varname;table?]
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
    name: "resetGuildVar",
    code: `
    $resetGuildVar[Example;main]
    `
});
```