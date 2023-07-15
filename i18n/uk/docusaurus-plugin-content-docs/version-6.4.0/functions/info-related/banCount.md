---
title: '$banCount'
description: '$banCount will return the amount of banned users of a specific guild.'
id: banCount
---

`$banCount` will return the amount of banned users of a specific guild.

## Використання

```php
$banCount[guildID?]
```

## Параметри

| Поле     | Тип     | Опис                                                                        | Обов'язковий |
| -------- | ------- | --------------------------------------------------------------------------- | ------------ |
| guildID? | integer | Guild ID of the guild you want to retrieve the amount of banned users from. | ні           |

#### Please note that your bot requires permissions to `VIEW_AUDIT_LOG`

## Приклад(и)

This will return the amount of banned users in your guild:

```javascript
bot.command({
    name: 'banCount',
    code: `
  $banCount
  `
});
```