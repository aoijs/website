---
title: '$isVerified'
description: '$isVerified checks if the given guild is verified by Discord.'
id: isVerified
---

`$isVerified` checks if the given guild is verified by Discord.

## Використання

```php
$isVerified[guildID?]
```

## Параметри

| Поле     | Тип     | Опис                                                                    | Обов'язковий |
| -------- | ------- | ----------------------------------------------------------------------- |:------------:|
| guildID? | integer | The ID of the guild where you want to check its verification status of. |      ні      |

## Приклад(и)

This will check if your server is verified and return either `true` or `false`:

```javascript
bot.command({
    name: 'isVerified',
    code: `
  $isVerified[$guildID]
  `
});
```
