---
title: '$setGuildVar'
description: '$setGuildVar cambiará el valor de una variable de guild determinada.'
id: setGuildVar
---

`$setGuildVar` cambiará el valor de una variable de gremio.

## Uso

```php
$setGuildVar[varname;value;guildID?;table?]
```

## Parámetros

| Campo       | Tipo     | Parámetros            | Requerido |
| ----------- | -------- | --------------------- |:---------:|
| varname     | consulta | Nombre variable.      | verdadero |
| valor       | consulta | Nuevo valor variable. | verdadero |
| servidorID? | entero   | ID del gremio.        |   falso   |
| tabla?      | string   | Tabla variable.       |   falso   |

## Ejemplo(s)

Esto cambiará el valor de "Ejemplo" a "Este es un valor":

```javascript
bot.command({
    name: "setGuildVar",
    code: `
    $setGuildVar[Example;This is a value;$guildID;main]
    `
});
```