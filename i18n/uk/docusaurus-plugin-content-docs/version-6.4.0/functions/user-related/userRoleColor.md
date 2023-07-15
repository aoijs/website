---
title: '$userRoleColor'
description: '$userRoleColor will return the role color of a user''s highest assigned role.'
id: userRoleColor
---

`$userRoleColor` will return the role color of a user's highest assigned role.

## Використання

```php
$userRoleColor[userID?;guildID?]
```

## Параметри

| Поле     | Тип     | Опис          | Обов'язковий |
| -------- | ------- | ------------- |:------------:|
| userID?  | integer | The user ID.  |      ні      |
| guildID? | integer | The guild ID. |      ні      |

## Приклад(и)

This will return the Color of your highest role:

```javascript
bot.command({
    name: 'userRoleColor',
    code: `
  $userRoleColor[$authorID;$guildID]
  `
});
```
