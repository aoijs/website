---
title: '$guildSplash'
description: '$guildSplash will return a guild''s invite background (if unlocked).'
id: guildSplash
---

`$guildSplash` will return a guild's invite background (if unlocked).

## Використання

```php
$guildSplash[guildID?]
```

## Параметри

| Поле     | Тип     | Опис                 | Обов'язковий |
| -------- | ------- | -------------------- |:------------:|
| guildID? | integer | The ID of the guild. |      ні      |

## Приклад(и)

This will return the guild's invite background (if unlocked):

```javascript
bot.command({
    name: 'guildSplash',
    code: `
  $guildSplash[$guildID]
  `
});
```
