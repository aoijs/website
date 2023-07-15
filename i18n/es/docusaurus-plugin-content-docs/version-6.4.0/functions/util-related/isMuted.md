---
title: '$isMuted'
description: '$isMuted will check if a specific user is muted within a voice channel.'
id: isMuted
---

`$isMuted` will check if a specific user is muted within a voice channel.

## Modo de uso

```php
$isMuted[userID?;guildID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                         | Requerido |
| ----------- | ------ | -------------------------------------------------- |:---------:|
| usarioID    | entero | ID of the user you want to check if they're muted. | verdadero |
| servidorID? | entero | ID of the guild where the user is muted in.        | verdadero |

## Ejemplo(s)

This will check if you're currently muted in a voice channel and returns either `true` or `false`:

```javascript
bot.command({
    name: 'isMuted',
    code: `
  $isMuted[$authorID;$guildID]
  `
});
```
