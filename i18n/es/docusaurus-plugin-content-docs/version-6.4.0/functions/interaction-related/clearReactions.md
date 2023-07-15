---
title: '$clearReactions'
description: '$clearReactions eliminará una respuesta dada o todas las reacciones de un mensaje.'
id: clearReactions
---

`$clearReactions` eliminará una respuesta determinada de un mensaje de un usuario dado.

## Uso

```php
$clearReactions[canalID;mensajeID;emoji]
```

## Parámetros

| Campo         | Tipo   | Parámetros                                                                                                    | Requerido |
| ------------- | ------ | ------------------------------------------------------------------------------------------------------------- |:---------:|
| canalID       | entero | ID del canal donde se encuentra el mensaje.                                                                   | verdadero |
| ID de mensaje | entero | El ID del mensaje.                                                                                            | verdadero |
| emoji         | string | El emoji exacto a eliminar. <br /> 1. **all** (por defecto) <br /> 2. **emoji** - cualquier emoji |    sí     |

## Ejemplo(s)

Esto añadirá dos emojis y eliminará uno completamente:

```javascript
bot.command({
    name: 'clearReactions',
    code: `
  $clearReactions[$channelID;$messageID;🥱]
  $wait[2s]
  $addCmdReactions[🥱;😩]
  `
});
```
