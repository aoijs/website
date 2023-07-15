---
title: '$reactionCount'
description: '$reactionCount devolverá la cantidad de usuarios que reaccionaron a un emoji específico.'
id: reactionCount
---

`$reactionCount` devolverá la cantidad de usuarios que reaccionaron a un emoji específico.

## Modo de uso

```php
$reactionCount[canalID;mensajeID;emoji]
```

## Parámetros

| Campo         | Tipo   | Parámetros                                      | Requerido |
| ------------- | ------ | ----------------------------------------------- |:---------:|
| canalID       | entero | ID del canal en el que se encuentra el mensaje. | verdadero |
| ID de mensaje | entero | ID del mensaje.                                 | verdadero |
| emoji         | string | El emoji su cuenta de reacción se devolverá de. |    sí     |

## Ejemplo(s)

Esto devolverá la cantidad de reacciones en su mensaje con el que ejecutó el comando, devolverá `1` debido a que el bot fue el único que reaccionó a él:

```javascript
bot.command({
    name: 'reactionCount',
    code: `
Los hay: $reactionCount[$channelID;$messageID;😫] reacciones
$addCmdReactions[😫]
`
});
```
