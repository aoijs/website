---
title: '$setGuildVar'
description: '$setGuildVar will change the value of a given guild variable.'
id: setGuildVar
---

`$setGuildVar` will change the value of a given guild variable.

## Modo de uso

```php
$setGuildVar[varname;value;guildID?;table?]
```

## Parámetros

| Campo       | Tipo     | Parámetros          | Requerido |
| ----------- | -------- | ------------------- |:---------:|
| varname     | consulta | Variable name.      | verdadero |
| value       | consulta | New Variable value. | verdadero |
| servidorID? | entero   | ID del gremio.      |   falso   |
| table?      | string   | Variable table.     |   falso   |

## Ejemplo(s)

This will change the value of "Example" to "This is a value":

```javascript
bot.command({
    name: "setGuildVar",
    code: `
    $setGuildVar[Example;This is a value;$guildID;main]
    `
});
```