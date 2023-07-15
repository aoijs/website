---
title: '$guildBoostLevel'
description: '$guildBoostLevel will return the guild''s boost level.'
id: guildBoostLevel
---

`$guildBoostLevel` will return the guild's boost level.

## Modo de uso

```php
$guildBoostLevel[guildID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros           | Requerido |
| ----------- | ------- | -------------------- |:---------:|
| servidorID? | integer | The ID of the guild. |    no     |

## Ejemplo(s)

This will return the boost level of a specific guild:

```javascript
bot.command({
    name: 'guildBoostLevel',
    code: `
  $guildBoostLevel[$guildID]
  `
});
```
