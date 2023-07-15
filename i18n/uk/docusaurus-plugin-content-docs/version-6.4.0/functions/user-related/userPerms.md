---
title: '$userPerms'
description: '$userPerms will return a user''s permission of a specific guild.'
id: userPerms
---

`$userPerms` will return a user's permission of a specific guild.

## Використання

```php
$userPerms[userID?;sep?;guildID?]
```

## Параметри

| Поле     | Тип     | Опис                                            | Обов'язковий |
| -------- | ------- | ----------------------------------------------- |:------------:|
| userID?  | integer | The user ID.                                    |      ні      |
| sep?     | рядок   | Separator to separate multiple returned values. |      ні      |
| guildID? | integer | The guild ID.                                   |      ні      |

## Приклад(и)

This will return your permissions:

```javascript
bot.command({
    name: 'userPerms',
    code: `
  $userPerms[$authorID;, ;$guildID]
  `
});
```
