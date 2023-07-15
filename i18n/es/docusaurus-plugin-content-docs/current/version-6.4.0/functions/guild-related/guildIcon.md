---
title: '$guildIcon'
description: '$guildIcon will return the guild''s icon.'
id: guildIcon
---

`$guildIcon` will return the guild's icon.

## Modo de uso

```php
$guildIcon[guildID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros           | Requerido |
| ----------- | ------- | -------------------- |:---------:|
| servidorID? | integer | The ID of the guild. |    no     |

## Ejemplo(s)

This will return the icon of the guild:

```javascript
bot.command({
    name: 'guildIcon',
    code: `
  $guildIcon[$guildID]
  `
});
```
