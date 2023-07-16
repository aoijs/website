---
title: '$addMessageReactions'
description: '$addMessageReactions añadirá una reacción a un mensaje específico.'
id: addMessageReactions
---

`$addMessageReactions` añadirá una reacción a un mensaje específico.

## Uso

```php
$addMessageReactions[canalID;mensajeID;...reacciones]
```

## Parámetros

| Campo      | Tipo   | Parámetros                                  | Requerido |
| ---------- | ------ | ------------------------------------------- |:---------:|
| canalID    | entero | ID del canal donde se encuentra el mensaje. | verdadero |
| mensajeID  | entero | ID del mensaje.                             | verdadero |
| reacciones | string | Reacciones que añadir.                      |    sí     |

## Ejemplo(s)

Esto añadirá las reacciones dadas a su mensaje:

```javascript
bot.command({
    name: 'addMessageReactions',
    code: `
 $addMessageReactions[$channelID;$messageID;✅;❌]
  `
});
```
