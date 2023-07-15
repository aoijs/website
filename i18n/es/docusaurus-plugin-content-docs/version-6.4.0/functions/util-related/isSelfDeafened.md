---
title: '$isSelfDeafened'
description: '$isSelfDeafened is similar but not to confuse with `$isDeafen`, this will check if the user deafened themselves.'
id: isSelfDeafened
---

`$isSelfDeafened` is similar but not to confuse with `$isDeafen`, this will check if the user deafened themselves.

## Modo de uso

```php
$isSelfDeafened[userID?;guildID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                            | Requerido |
| ----------- | ------ | ----------------------------------------------------- |:---------:|
| usarioID?   | entero | ID of the user you want to check if they're deafened. |    no     |
| servidorID? | entero | ID of the guild where they're deafened in.            |    no     |

## Ejemplo(s)

This will return either `true` or `false` depending on if you're deafened or not:

```javascript
bot.command({
    name: 'isSelfDeafened',
    code: `
  $isSelfDeafened
  `
});
```
