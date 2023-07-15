---
title: '$isVerified'
description: '$isVerified checks if the given guild is verified by Discord.'
id: isVerified
---

`$isVerified` checks if the given guild is verified by Discord.

## Modo de uso

```php
$isVerified[guildID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros                                                              | Requerido |
| ----------- | ------- | ----------------------------------------------------------------------- |:---------:|
| servidorID? | integer | The ID of the guild where you want to check its verification status of. |    no     |

## Ejemplo(s)

This will check if your server is verified and return either `true` or `false`:

```javascript
bot.command({
    name: 'isVerified',
    code: `
  $isVerified[$guildID]
  `
});
```
