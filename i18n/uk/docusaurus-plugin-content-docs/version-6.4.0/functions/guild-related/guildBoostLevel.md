---
title: '$guildBoostLevel'
description: '$guildBoostLevel will return the guild''s boost level.'
id: guildBoostLevel
---

`$guildBoostLevel` will return the guild's boost level.

## Використання

```php
$guildBoostLevel[guildID?]
```

## Параметри

| Поле     | Тип     | Опис                 | Обов'язковий |
| -------- | ------- | -------------------- |:------------:|
| guildID? | integer | The ID of the guild. |      ні      |

## Приклад(и)

This will return the boost level of a specific guild:

```javascript
bot.command({
    name: 'guildBoostLevel',
    code: `
  $guildBoostLevel[$guildID]
  `
});
```
