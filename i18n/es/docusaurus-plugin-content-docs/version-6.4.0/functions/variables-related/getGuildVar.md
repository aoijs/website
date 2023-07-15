---
title: '$getGuildVar'
description: '$getGuildVar will return the value of a given guild variable.'
id: getGuildVar
---

`$getGuildVar` will return the value of a given guild variable.

## Modo de uso

```php
$getGuildVar[varname;guildID?;table?]
```

## Parámetros

| Campo       | Tipo     | Parámetros      | Requerido |
| ----------- | -------- | --------------- |:---------:|
| varname     | consulta | Variable name.  | verdadero |
| servidorID? | entero   | ID del gremio.  |    no     |
| table?      | string   | Variable table. |   falso   |

## Ejemplo(s)

This will return the value of a variable called "Example":

```javascript
bot.command({
    name: "getGuildVar",
    code: `
    $getGuildVar[Example;$guildID;main]
    `
});
```