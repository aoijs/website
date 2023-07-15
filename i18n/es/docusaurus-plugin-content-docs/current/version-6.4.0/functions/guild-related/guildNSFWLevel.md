---
title: '$guildNSFWLevel'
description: '$guildNSFWLevel will return the guild''s NSFW level.'
id: guildNSFWLevel
---

`$guildNSFWLevel` will return the guild's NSFW level.

## Modo de uso

```php
$guildNSFWLevel[guildID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros           | Requerido |
| ----------- | ------- | -------------------- |:---------:|
| servidorID? | integer | The ID of the guild. | verdadera |

## Ejemplo(s)

This will return the guild's NSFW level:

```javascript
bot.command({
    name: 'guildNSFWLevel',
    code: `
  $guildNSFWLevel[$guildID]
  `
});
```
