---
title: '$guildBoostCount'
description: '$guildBoostCount will return the guild''s boost count.'
id: guildBoostCount
---

`$guildBoostCount` will return the guild's boost count.

## Використання

```php
$guildBoostCount[guildID?]
```

## Параметри

| Поле     | Тип     | Опис                 | Обов'язковий |
| -------- | ------- | -------------------- |:------------:|
| guildID? | integer | The ID of the guild. |      ні      |

## Приклад(и)

This will return the amount of boosts a specific guild has:

```javascript
bot.command({
    name: 'guildBoostCount',
    code: `
  $guildBoostCount[$guildID]
  `
});
```
