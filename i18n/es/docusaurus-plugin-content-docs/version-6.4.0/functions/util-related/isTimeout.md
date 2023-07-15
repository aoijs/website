---
title: '$isTimeout'
description: '$isTimeout will check if the user is timeouted with Discord''s built-in timeout feature.'
id: isTimeout
---

`$isTimeout` will check if the user is timeouted with Discord's built-in timeout feature.

## Modo de uso

```php
$isTimeout[guildID?;userID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                      | Requerido |
| ----------- | ------ | ----------------------------------------------- |:---------:|
| servidorID? | entero | The ID of the guild where they're timeouted in. |    no     |
| usarioID?   | entero | The ID of the user that's timeouted.            |    no     |

## Ejemplo(s)

This will check if you're timeouted and either return `true` or `false`:

```javascript
bot.command({
    name: 'isTimeout',
    code: `
  $isTimeout[$guildID;$authorID]
  `
});
```
