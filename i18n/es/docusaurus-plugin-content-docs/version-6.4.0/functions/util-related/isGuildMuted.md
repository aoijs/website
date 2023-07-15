---
title: '$isGuildMuted'
description: '$isGuildMuted is similar but not to confuse with `$isMuted`, this will check if the user is server muted.'
id: isGuildMuted
---

`$isGuildMuted` is similar but not to confuse with `$isMuted`, this will check if the user is server muted.

## Modo de uso

```php
$isGuildMuted[userID?;guildID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                                    | Requerido |
| ----------- | ------ | ------------------------------------------------------------- |:---------:|
| usarioID?   | entero | The ID of the user you want to check if they're server muted. |    no     |
| servidorID? | entero | The ID of the guild where they're server muted in.            |    no     |

## Ejemplo(s)

This will return either `true` or `false` depending on if you're server muted or not:

```javascript
bot.command({
    name: 'isGuildMuted',
    code: `
  $isGuildMuted[$authorID;$guildID]
  `
});
```
