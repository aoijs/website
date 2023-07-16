---
title: '$isSelfMuted'
description: '$isSelfMuted is similar but not to confuse with `$isMuted`, this will check if the user muted themselves.'
id: isSelfMuted
---

$isSelfMuted is similar but not to confuse with `$isMuted`, this will check if the user muted themselves.

## Uso

```php
$isSelfMuted[userID?;guildID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                         | Requerido |
| ----------- | ------ | -------------------------------------------------- |:---------:|
| usarioID?   | entero | ID of the user you want to check if they're muted. |    no     |
| servidorID? | entero | ID of the guild where they're muted in.            |    no     |

## Ejemplo(s)

This will return either `true` or `false` depending on if you're muted (voice channel) or not:

```javascript
bot.command({
    name: 'isSelfDeafened',
    code: `
  $isSelfDeafened
  `
});
```
