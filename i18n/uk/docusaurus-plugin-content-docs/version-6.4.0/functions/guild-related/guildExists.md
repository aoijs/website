---
title: '$guildExists'
description: '$guildExists will check if the given guild exists.'
id: guildExists
---

`$guildExists` will check if the given guild exists.

## Використання

```php
$guildExists[guildId]
```

## Параметри

| Поле    | Тип     | Опис      | Обов'язковий |
| ------- | ------- | --------- |:------------:|
| guildId | integer | Guild ID. |     так      |

## Приклад(и)

This will return `true` your guild exists:

```javascript
bot.command({
    name: 'guildExists',
    code: `
  $guildExists[$guildID]
  `
});
```