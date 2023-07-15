---
title: '$guildVerificationLevel'
description: '$guildVerificationLevel will return the guild''s verification level.'
id: guildVerificationLevel
---

`$guildVerificationLevel` will return the guild's verification level.

## Використання

```php
$guildVerificationLevel[guildID?]
```

## Параметри

| Поле     | Тип     | Опис                 | Обов'язковий |
| -------- | ------- | -------------------- |:------------:|
| guildID? | integer | The ID of the guild. |      ні      |

| Тип |         |
| --- | ------- |
| 0   | None    |
| 1   | Low     |
| 2   | Medium  |
| 3   | High    |
| 4   | Highest |

## Приклад(и)

This will return the guild's verification Level:

```javascript
bot.command({
    name: 'guildVerificationLevel',
    code: `
  $guildVerificationLevel[$guildID]
  `
});
```
