---
title: '$reply'
description: '$reply responderá a un mensaje determinado.'
id: reply
---

`$reply` responderá a un mensaje determinado.

## Uso

```php
$reply[ID de mensaje?;mencionarUsuario?]
```

## Parámetros

| Campo               | Tipo    | Parámetros                                                                                            | Requerido |
| ------------------- | ------- | ----------------------------------------------------------------------------------------------------- |:---------:|
| ID de mensaje?      | entero  | El ID del mensaje al que se responderá.                                                               |   falso   |
| ¿mencionar usuario? | boolean | ¿Mencionar al autor en la respuesta? <br /> 1. **true** (por defecto) <br /> 2. **false** |   falso   |

## Ejemplo(s)

Esto responderá a tu mensaje de comando:

```javascript
bot.command({
    name: 'reply',
    code: `
   Hola!
   $reply[$messageID;true]
  `
});
```