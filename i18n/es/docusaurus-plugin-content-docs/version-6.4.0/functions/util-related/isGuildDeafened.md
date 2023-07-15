---
title: '$isGuildDeafened'
description: '$isGuildDeafened is similar but not to confuse with `$isDeafen`, this will check if the user is server deafened.'
id: isGuildDeafened
---

`$isGuildDeafened` is similar but not to confuse with `$isDeafen`, this will check if the user is server deafened.

## Modo de uso

```php
$isGuildDeafened[userID?;guildID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                                       | Requerido |
| ----------- | ------ | ---------------------------------------------------------------- |:---------:|
| usarioID?   | entero | The ID of the user you want to check if they're server deafened. |    no     |
| servidorID? | entero | The ID of the guild where they're server deafened in.            |    no     |

## Ejemplo(s)

This will return either `true` or `false` depending on if you're server deafened or not:

```javascript
bot.command({
    name: 'isGuildDeafened',
    code: `
  $isGuildDeafened
  `
});
```
