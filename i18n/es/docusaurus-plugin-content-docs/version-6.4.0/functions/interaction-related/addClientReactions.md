---
title: '$addClientReactions'
description: '$addClientReactions añadirá una reacción al mensaje del bot.'
id: addClientReactions
---

`$addClientReactions` añadirá una reacción al mensaje del bot.

## Uso

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
    name: 'addClientReactions',
    code: `
    Hola!
    $addClientReactions[🧡;❤]
  `
});
```