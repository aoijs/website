---
title: '$giveRole'
description: '$giveRole will give an specific user a specific role.'
id: giveRole
---

`$giveRole` will give an specific user a specific role.

## Використання

```php
$giveRole[guildID;userID;roleID;reason?]
```

## Параметри

| Поле    | Тип     | Опис                                                         | Обов'язковий |
| ------- | ------- | ------------------------------------------------------------ |:------------:|
| guildID | integer | Of which guild the member should receive roles of.           |     так      |
| userID  | integer | The user ID of the guild member.                             |     так      |
| roleID  | integer | The ID of the role to give.                                  |     так      |
| reason? | рядок   | The reason that will be displayed in the guild's audit logs. |      ні      |

Please note that the bots **highest** role must be above the role you're trying to assign.

## Приклад(и)

This will assign you a role called "Admin" (if present):

```javascript
bot.command({
    name: 'giveRole',
    code: `
  $giveRole[$guildID;$authorID;$findRole[Admin];Some reason.]
  `
});
```