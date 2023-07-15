---
title: '$guildPreferredLocale'
description: '$guildPreferredLocale will return a guild''s set locale.'
id: guildPreferredLocale
---

`$guildPreferredLocale` will return a guild's set locale.

## Використання

```php
$guildPreferredLocale[guildID?]
```

## Параметри

| Поле     | Тип     | Опис                 | Обов'язковий |
| -------- | ------- | -------------------- |:------------:|
| guildID? | integer | The ID of the guild. |      ні      |

## Приклад(и)

This will return the guild's preferred locale:

```javascript
bot.command({
    name: 'guildPreferredLocale',
    code: `
  $guildPreferredLocale[$guildID]
  `
});
```
