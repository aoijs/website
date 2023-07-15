---
title: '$guildNSFWLevel'
description: '$guildNSFWLevel will return the guild''s NSFW level.'
id: guildNSFWLevel
---

`$guildNSFWLevel` will return the guild's NSFW level.

## Використання

```php
$guildNSFWLevel[guildID?]
```

## Параметри

| Поле     | Тип     | Опис                 | Обов'язковий |
| -------- | ------- | -------------------- |:------------:|
| guildID? | integer | The ID of the guild. |     так      |

## Приклад(и)

This will return the guild's NSFW level:

```javascript
bot.command({
    name: 'guildNSFWLevel',
    code: `
  $guildNSFWLevel[$guildID]
  `
});
```
