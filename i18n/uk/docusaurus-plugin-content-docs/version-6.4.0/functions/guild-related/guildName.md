---
title: '$guildName'
description: '$guildName will return a guild''s name.'
id: guildName
---

`$guildName` will return a guild's name.

## Використання

```php
$guildName[guildID?]
```

## Параметри

| Поле     | Тип     | Опис                 | Обов'язковий |
| -------- | ------- | -------------------- |:------------:|
| guildID? | integer | The ID of the guild. |      ні      |

## Приклад(и)

This will return the name of your guild:

```javascript
bot.command({
    name: 'guildName',
    code: `
  $guildName[$guildID]
  `
});
```
