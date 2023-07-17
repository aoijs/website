---
title: '$message'
description: '$message devolverá los argumentos dados de un mensaje.'
id: message
---

`$message` devolverá argumentos dados de una interacción.

## Uso

```php
$message[indice?]
```

## Parámetros

| Campo   | Tipo   | Parámetros                                                                              | Requerido |
| ------- | ------ | --------------------------------------------------------------------------------------- |:---------:|
| índice? | entero | Qué argumento de mensaje será devuelto, déjalo vacío para devolver el mensaje completo. |   falso   |

## Ejemplo(s)

Esto responderá a tu mensaje de comando:

```javascript
bot.command({
    name: 'message',
    code: `
  Usted dijo: "$message"
  ` // [prefix]message Hola!
});
```
