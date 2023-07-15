---
title: '$isBot'
description: '$isBot will check if the given user is a bot.'
id: isBot
---

`$isBot` will check if the given user is a bot.

## Modo de uso

```php
$isBot[userID?]
```

## Parámetros

| Campo     | Tipo    | Parámetros                         | Requerido |
| --------- | ------- | ---------------------------------- |:---------:|
| usarioID? | integer | User id to check if they're a bot. |    no     |

## Ejemplo(s)

This will return `true` as your bot is, obviously, a bot:

```javascript
bot.command({
    name: 'isBot',
    code: `
  $isBot[$clientID]
  `
});
```
