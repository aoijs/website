---
title: '$clearReaction'
description: '$clearReaction eliminará una reacción dada de un mensaje de un usuario dado.'
id: clearReaction
---

`$clearReaction` eliminará una respuesta determinada de un mensaje de un usuario dado.

## Uso

```php
$clearReaction[canalID;mensajeID;ID de usuario;emoji]
```

## Parámetros

| Campo         | Tipo   | Parámetros                                                                                                    | Requerido |
| ------------- | ------ | ------------------------------------------------------------------------------------------------------------- |:---------:|
| canalID       | entero | ID del canal donde se encuentra el mensaje.                                                                   | verdadero |
| ID de mensaje | entero | El ID del mensaje.                                                                                            | verdadero |
| usarioID      | entero | El identificador de usuario del usuario cuyas reacciones serán eliminadas.                                    | verdadero |
| emoji         | string | El emoji exacto a eliminar. <br /> 1. **all** (por defecto) <br /> 2. **emoji** - cualquier emoji | verdadero |

## Ejemplo(s)

Esto añadirá y eliminará la reacción del bot después de dos segundos:

```javascript
bot.command({
    name: 'clearReaction',
    code: `
  $clearReaction[$channelID;$messageID;$clientID;🥱]
  $wait[2s]
  $addCmdReactions[🥱]
  `
});
```
