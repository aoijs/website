---
title: '$guildVerificationLevel'
description: '$guildVerificationLevel will return the guild''s verification level.'
id: guildVerificationLevel
---

`$guildVerificationLevel` will return the guild's verification level.

## Modo de uso

```php
$guildVerificationLevel[guildID?]
```

## Parámetros

| Campo       | Tipo   | Descripción          | Requerido |
| ----------- | ------ | -------------------- |:---------:|
| servidorID? | entero | The ID of the guild. |    no     |

| Tipo |         |
| ---- | ------- |
| 0    | None    |
| 1    | Low     |
| 2    | Medium  |
| 3    | High    |
| 4    | Highest |

## Ejemplo(s)

This will return the guild's verification Level:

```javascript
bot.command({
    name: 'guildVerificationLevel',
    code: `
  $guildVerificationLevel[$guildID]
  `
});
```
