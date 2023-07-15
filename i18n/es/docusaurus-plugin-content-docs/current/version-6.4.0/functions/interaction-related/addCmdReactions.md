---
title: '$addCmdReactions'
description: '$addCmdReactions will react with given emojis to the author''s message.'
id: addCmdReactions
---

`$addCmdReactions` will react with given emojis to the author's message.

## Modo de uso

```php
$addCmdReactions[...reactions]
```

## Parámetros

| Campo      | Tipo   | Parámetros        | Requerido |
| ---------- | ------ | ----------------- |:---------:|
| reacciones | string | Reactions to add. | verdadera |

## Ejemplo(s)

This will add the given emojis to the author's response ("Hello!"):

```javascript
bot.command({
    name: 'addCmdReactions',
    code: `
Hello!
$addCmdReactions[🧡;❤]
  `
});
```
