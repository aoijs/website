---
title: '$guildIcon'
description: '$guildIcon will return the guild''s icon.'
id: guildIcon
---

`$guildIcon` will return the guild's icon.

## Використання

```php
$guildIcon[guildID?]
```

## Параметри

| Поле     | Тип     | Опис                 | Обов'язковий |
| -------- | ------- | -------------------- |:------------:|
| guildID? | integer | The ID of the guild. |      ні      |

## Приклад(и)

This will return the icon of the guild:

```javascript
bot.command({
    name: 'guildIcon',
    code: `
  $guildIcon[$guildID]
  `
});
```
