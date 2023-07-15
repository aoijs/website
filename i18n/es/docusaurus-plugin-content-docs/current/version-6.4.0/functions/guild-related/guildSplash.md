---
title: '$guildSplash'
description: '$guildSplash will return a guild''s invite background (if unlocked).'
id: guildSplash
---

`$guildSplash` will return a guild's invite background (if unlocked).

## Modo de uso

```php
$guildSplash[guildID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros           | Requerido |
| ----------- | ------- | -------------------- |:---------:|
| servidorID? | integer | The ID of the guild. |    no     |

## Ejemplo(s)

This will return the guild's invite background (if unlocked):

```javascript
bot.command({
    name: 'guildSplash',
    code: `
  $guildSplash[$guildID]
  `
});
```
