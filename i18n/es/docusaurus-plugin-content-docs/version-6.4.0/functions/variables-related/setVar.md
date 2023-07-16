---
title: '$setVar'
description: '$setVar cambiará el valor de una variable global determinada.'
id: setVar
---

`$setVar` cambiará el valor de una variable global determinada.

## Uso

```php
$setVar[varname;value;table?]
```

## Parámetros

| Campo   | Tipo     | Parámetros            | Requerido |
| ------- | -------- | --------------------- |:---------:|
| Varname | consulta | Nombre variable.      | verdadero |
| Valor   | consulta | Nuevo valor variable. | verdadero |
| ¿Tabla? | string   | Tabla variable.       |   falso   |

## Ejemplo(s)

Esto cambiará el valor de "Ejemplo" a "Este es un valor":

```javascript
bot.command({
    name: "setVar",
    code: `
    $setVar[Example;This is a value;main]
    `
});
```