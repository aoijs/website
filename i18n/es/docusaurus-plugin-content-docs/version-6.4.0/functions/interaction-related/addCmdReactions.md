---
title: '$addCmdReactions'
description: '$addCmdReactions reaccionará con emojis dados al mensaje del autor.'
id: addCmdReactions
---

$addCmdReactions reaccionará con emojis dados al mensaje del autor.

## Modo de uso

```php
$addClientReactions[...reacciones]
```

## Parámetros

| Campo      | Tipo   | Parámetros           | Requerido |
| ---------- | ------ | -------------------- |:---------:|
| reacciones | string | Reacciones a añadir. | verdadera |

## Ejemplo(s)

Esto añadirá los emojis dados a la respuesta del bot ("¡Hola!"):

```javascript
bot.command({
    name: 'addCmdReactions',
    code: `
Hola!
$addCmdReactions[🧡;❤]
  `
});
```
