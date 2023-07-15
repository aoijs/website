---
title: '$isBanned'
description: '$isBanned checks if a given user is banned in a specific guild.'
id: isBanned
---

`$isBanned` checks if a given user is banned in a specific guild.

## Використання

```php
$isBanned[guildID;userID]
```

## Параметри

| Поле    | Тип     | Опис                                                          | Обов'язковий |
| ------- | ------- | ------------------------------------------------------------- |:------------:|
| guildID | integer | ID of the guild where to check if the user is banned or not.  |     так      |
| userID  | integer | ID of the user that will be checked if they're banned or not. |     так      |

## Приклад(и)

This will return `false` as you're not banned in this guild:

```javascript
bot.command({
    name: 'isBanned',
    code: `
  $isBanned[$guildID;$authorID]
  `
});
```
