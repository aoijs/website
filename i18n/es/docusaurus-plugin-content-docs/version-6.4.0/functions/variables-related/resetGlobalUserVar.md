---
title: '$resetGlobalUserVar'
description: '$resetGlobalUserVar establecerá una variable global de usuario a su valor predeterminado.'
id: resetGlobalUserVar
---

`$resetGlobalUserVar` establecerá una variable global de usuario a su valor predeterminado.

## Uso

```php
$resetGlobalUserVar[varname;table?]
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
    name: "resetGlobalUserVar",
    code: `
    $resetGlobalUserVar[Example;main]
    `
});
```