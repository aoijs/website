---
title: '$getVar'
description: '$getVar devolverá el valor de una variable global.'
id: getVar
---

`$getVar` devolverá el valor de una variable global

## Uso

```php
$getVar[varname;table?]
```

## Parámetros

| Campo   | Tipo     | Parámetros       | Requerido |
| ------- | -------- | ---------------- |:---------:|
| varname | consulta | Nombre variable. | verdadero |
| tabla?  | consulta | Tabla variable.  |    no     |

## Ejemplo(s)

Esto devolverá el valor de una variable llamada "Ejemplo":

```javascript
bot.command({
    name: "getVar",
    code: `
    $getVar[Example;main]
    `
});
```