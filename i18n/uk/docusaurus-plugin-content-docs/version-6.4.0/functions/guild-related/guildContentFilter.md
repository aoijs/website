---
title: '$guildContentFilter'
description: '$guildContentFilter will return the guild''s content filter level.'
id: guildContentFilter
---

`$guildContentFilter` will return the guild's content filter level.

## Використання

```php
$guildContentFilter[guildID?]
```

## Параметри

| Поле     | Тип     | Опис                 | Обов'язковий |
| -------- | ------- | -------------------- |:------------:|
| guildID? | integer | The ID of the guild. |     так      |

| Тип |          |
| --- | -------- |
| 0   | Disabled |
| 1   | Medium   |
| 2   | High     |

## Приклад(и)

This will return the content filter level of a specific guild:

```javascript
bot.command({
    name: 'guildContentFilter',
    code: `
  $guildContentFilter[$guildID]
  `
});
```
