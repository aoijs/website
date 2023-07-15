---
title: '$guildPreferredLocale'
description: '$guildPreferredLocale will return a guild''s set locale.'
id: guildPreferredLocale
---

`$guildPreferredLocale` will return a guild's set locale.

## Modo de uso

```php
$guildPreferredLocale[guildID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros           | Requerido |
| ----------- | ------- | -------------------- |:---------:|
| servidorID? | integer | The ID of the guild. |    no     |

## Ejemplo(s)

This will return the guild's preferred locale:

```javascript
bot.command({
    name: 'guildPreferredLocale',
    code: `
  $guildPreferredLocale[$guildID]
  `
});
```
