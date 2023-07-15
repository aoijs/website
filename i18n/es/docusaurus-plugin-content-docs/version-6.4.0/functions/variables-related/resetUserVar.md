---
title: '$resetUserVar'
description: '$resetUserVar will set a given user variable to its default value of a given guild.'
id: resetUserVar
---

`$resetUserVar` will set a given user variable to its default value of a given guild.

## Modo de uso

```php
$resetUserVar[varname;guildID?;table?]
```

## Parámetros

| Campo       | Tipo     | Parámetros      | Requerido |
| ----------- | -------- | --------------- |:---------:|
| varname     | consulta | Variable name.  | verdadero |
| servidorID? | entero   | ID del gremio.  |    no     |
| table?      | string   | Variable table. |   falso   |

## Ejemplo(s)

This will reset a variable called "Example":

```javascript
bot.command({
    name: "resetUserVar",
    code: `
    $resetUserVar[Example;$guildID;main]
    `
});
```