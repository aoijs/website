---
title: '$guildAvailable'
description: '$guildAvailable will return if the given guild is available on Discord.'
id: guildAvailable
---

`$guildAvailable` will return if the given guild is available on Discord.

## Використання

```php
$guildAvailable[guildID?]
```

## Параметри

| Поле     | Тип     | Опис                 | Обов'язковий |
| -------- | ------- | -------------------- |:------------:|
| guildID? | integer | The ID of the guild. |      ні      |

## Приклад(и)

This will return `true` or `false` depending on if the guild is available:

```javascript
bot.command({
    name: 'guildAvailable',
    code: `
  $guildAvailable[$guildID]
  `
});
```
