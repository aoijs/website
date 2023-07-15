---
title: '$guildMFALevel'
description: '$guildMFALevel will return the guild''s MFA Level.'
id: guildMFALevel
---

`$guildMFALevel` will return the guild's MFA Level.

## Використання

```php
$guildMFALevel[guildID?]
```

## Параметри

| Поле     | Тип     | Опис                 | Обов'язковий |
| -------- | ------- | -------------------- |:------------:|
| guildID? | integer | The ID of the guild. |      ні      |

| Тип |                                                               |
| --- | ------------------------------------------------------------- |
| 0   | Guild has MFA/2FA requirement for moderation actions disabled |
| 1   | Guild has MFA/2FA requirement for moderation actions          |

## Приклад(и)

This will return the guild's MFA Level:

```javascript
bot.command({
    name: 'guildMFALevel',
    code: `
  $guildMFALevel[$guildID]
  `
});
```
