---
title: '$guildDescription'
description: '$guildDescription will return the guild''s description.'
id: guildDescription
---

`$guildDescription` will return the guild's description.

## Використання

```php
$guildDescription[guildID?]
```

## Параметри

| Поле     | Тип     | Опис                 | Обов'язковий |
| -------- | ------- | -------------------- |:------------:|
| guildID? | integer | The ID of the guild. |      ні      |

## Приклад(и)

This will return the description of a specific guild:

```javascript
bot.command({
    name: 'guildDescription',
    code: `
  $guildDescription[$guildID]
  `
});
```
