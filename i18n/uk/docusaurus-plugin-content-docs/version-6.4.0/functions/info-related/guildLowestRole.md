---
title: '$guildLowestRole'
description: '$guildLowestRole will return the lowest role of a specific guild.'
id: guildLowestRole
---

`$guildLowestRole` will return the lowest role of a specific guild.

## Використання

```php
$guildLowestRole[guildID?]
```

## Параметри

| Поле     | Тип     | Опис                 | Обов'язковий |
| -------- | ------- | -------------------- |:------------:|
| guildID? | integer | The ID of the guild. |      ні      |

## Приклад(и)

This will return the ID of the lowest guild role:

```javascript
bot.command({
    name: 'guildLowestRole',
    code: `
  $guildLowestRole[$guildID]
  `
});
```
