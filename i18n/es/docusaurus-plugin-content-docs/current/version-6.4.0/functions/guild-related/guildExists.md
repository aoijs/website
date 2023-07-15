---
title: '$guildExists'
description: '$guildExists will check if the given guild exists.'
id: guildExists
---

`$guildExists` will check if the given guild exists.

## Modo de uso

```php
$guildExists[guildId]
```

## Parámetros

| Campo   | Tipo    | Parámetros     | Requerido |
| ------- | ------- | -------------- |:---------:|
| guildId | integer | ID del gremio. | verdadera |

## Ejemplo(s)

This will return `true` your guild exists:

```javascript
bot.command({
    name: 'guildExists',
    code: `
  $guildExists[$guildID]
  `
});
```