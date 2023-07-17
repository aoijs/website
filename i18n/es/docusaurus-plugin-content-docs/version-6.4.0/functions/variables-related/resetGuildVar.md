---
title: '$resetGuildVar'
description: '$resetGuildVar establecerá una variable de guild determinada a su valor predeterminado.'
id: resetGuildVar
---

`$resetGuildVar` establecerá una variable del gremio a su valor predeterminado.

## Uso

```php
$resetGuildVar[varname;table?]
```

## Parámetros

| Campo   | Tipo     | Parámetros       | Requerido |
| ------- | -------- | ---------------- |:---------:|
| varname | consulta | Nombre variable. | verdadero |
| tabla?  | consulta | Tabla variable.  |    no     |

## Ejemplo(s)

Esto restablecerá una variable llamada "Ejemplo":

```javascript
bot.command({
    name: "resetGuildVar",
    code: `
    $resetGuildVar[Example;main]
    `
});
```