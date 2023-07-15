---
title: '$isPartnered'
description: '$isPartnered checks if the given guild is partnered with Discord.'
id: isPartnered
---

`$isPartnered` checks if the given guild is partnered with Discord.

## Modo de uso

```php
$isPartnered[guildID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros                                                       | Requerido |
| ----------- | ------- | ---------------------------------------------------------------- |:---------:|
| servidorID? | integer | The ID of the guild you want to check its partnership status of. | verdadera |

## Ejemplo(s)

This will check if your server is partnered and return either `true` or `false`:

```javascript
bot.command({
    name: 'isPartnered',
    code: `
  $isPartnered[$guildID]
  `
});
```
