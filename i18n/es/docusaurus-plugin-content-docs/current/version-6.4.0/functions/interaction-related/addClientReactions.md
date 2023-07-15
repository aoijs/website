---
title: '$addClientReactions'
description: '$addClientReactions will add a reaction to the bot''s message.'
id: addClientReactions
---

`$addClientReactions` will add a reaction to the bot's message.

## Modo de uso

```php
$addClientReactions[...reactions]
```

## Parámetros

| Campo      | Tipo   | Parámetros        | Requerido |
| ---------- | ------ | ----------------- |:---------:|
| reacciones | string | Reactions to add. | verdadera |

## Ejemplo(s)

This will add the given emojis to the bot's response ("Hello!"):

```javascript
bot.command({
    name: 'addClientReactions',
    code: `
    Hello!
    $addClientReactions[🧡;❤]
  `
});
```