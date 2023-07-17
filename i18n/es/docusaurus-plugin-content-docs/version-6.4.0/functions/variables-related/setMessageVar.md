---
title: '$setMessageVar'
description: '$setMessageVar cambiará el valor de una variable de mensaje determinada.'
id: setMessageVar
---

`$setMessageVar` cambiará el valor de una variable de mensaje.

## Uso

```php
$setMessageVar[varname;value;messageID?;table?]
```

## Parámetros

| Campo          | Tipo     | Parámetros            | Requerido |
| -------------- | -------- | --------------------- |:---------:|
| varname        | consulta | Nombre variable.      | verdadero |
| valor          | consulta | Nuevo valor variable. | verdadero |
| ID de mensaje? | entero   | Mensaje ID.           |   falso   |
| tabla?         | string   | Tabla variable.       |   falso   |

## Ejemplo(s)

Esto cambiará el valor de "Ejemplo" a "Este es un valor":

```javascript
bot.command({
    name: "setMessageVar",
    code: `
    $setMessageVar[Example;This is a value;$messageID;main]
    `
});
```