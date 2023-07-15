---
title: '$removeRoles'
description: '$removeRoles will remove one or multiple roles from a given member.'
id: removeRoles
---

`$removeRoles` will remove one or multiple roles from a given member.

## Використання

```php
$removeRoles[guildID;userID;reason?;...roleIDs]
```

## Параметри

| Поле       | Тип     | Опис                                                         | Обов'язковий |
| ---------- | ------- | ------------------------------------------------------------ |:------------:|
| guildID    | integer | The guild ID of where the user and role is located in.       |     так      |
| userID     | integer | The ID of the user whose role will be removed.               |     так      |
| reason?    | рядок   | The reason that will be displayed in the guild's audit logs. |      ні      |
| ...roleIDs | integer | The IDs of the roles that will be removed.                   |     так      |

## Приклад(и)

This will remove given roles from yourself (the roles must be below the bot's highest role):

```javascript
bot.command({
    name: 'removeRoles',
    code: `
   $removeRoles[$guildID;$authorID;Some reason..;roleID;roleID;...]`
});
```