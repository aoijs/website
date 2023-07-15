---
title: '$guildMFALevel'
description: '$guildMFALevel will return the guild''s MFA Level.'
id: guildMFALevel
---

`$guildMFALevel` will return the guild's MFA Level.

## Modo de uso

```php
$guildMFALevel[guildID?]
```

## Parámetros

| Campo       | Tipo   | Descripción          | Requerido |
| ----------- | ------ | -------------------- |:---------:|
| servidorID? | entero | The ID of the guild. |    no     |

| Tipo |                                                               |
| ---- | ------------------------------------------------------------- |
| 0    | Guild has MFA/2FA requirement for moderation actions disabled |
| 1    | Guild has MFA/2FA requirement for moderation actions          |

## Ejemplo(s)

This will return the guild's MFA Level:

```javascript
bot.command({
    name: 'guildMFALevel',
    code: `
  $guildMFALevel[$guildID]
  `
});
```
