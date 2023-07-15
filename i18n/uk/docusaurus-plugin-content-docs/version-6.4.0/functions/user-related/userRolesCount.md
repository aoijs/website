---
title: '$userRolesCount'
description: '$userRolesCount will return a user''s role count.'
id: userRolesCount
---

`$userRolesCount` will return a user's role count.

## Використання

```php
$userRolesCount[userID?;guildID?]
```

## Параметри

| Поле     | Тип     | Опис          | Обов'язковий |
| -------- | ------- | ------------- |:------------:|
| userID?  | integer | The user ID.  |      ні      |
| guildID? | integer | The guild ID. |      ні      |

## Приклад(и)

This will return the amount of roles you have assigned:

```javascript
bot.command({
    name: 'userRolesCount',
    code: `
  $userRolesCount[$authorID;$guildID]
  `
});
```
