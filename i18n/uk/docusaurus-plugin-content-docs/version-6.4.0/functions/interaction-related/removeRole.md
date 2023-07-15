---
title: '$removeRole'
description: '$removeRole will remove a given role from a given member.'
id: removeRole
---

`$removeRole` will remove a given role from a given member.

## Використання

```php
$removeRole[guildID;userID;roleID;reason?]
```

## Параметри

| Поле    | Тип     | Опис                                                         | Обов'язковий |
| ------- | ------- | ------------------------------------------------------------ |:------------:|
| guildID | integer | The guild ID of where the user and role is located in.       |     так      |
| userID  | integer | The ID of the user whose role will be removed.               |     так      |
| roleID  | integer | The ID of the role that will be removed.                     |     так      |
| reason? | рядок   | The reason that will be displayed in the guild's audit logs. |      ні      |

## Приклад(и)

This will remove a given role from yourself (the role must be below the bot's highest role):

```javascript
bot.command({
    name: 'removeRole',
    code: `
   $removeRole[$guildID;$authorID;roleID;Some reason.]`
});
```