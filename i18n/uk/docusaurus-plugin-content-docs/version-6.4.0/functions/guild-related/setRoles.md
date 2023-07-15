---
title: '$setRoles'
description: '$setRoles will set a member''s roles.'
id: setRoles
---

`$setRoles` will set a member's roles.

## Використання

```php
$setRoles[guildID;memberID;reason?;...roleIDs]
```

## Параметри

| Поле       | Тип     | Опис                                                                | Обов'язковий |
| ---------- | ------- | ------------------------------------------------------------------- |:------------:|
| guildID    | integer | The ID of the guild where the users roles will be removed or added. |     так      |
| memberID   | integer | The user ID of the guild member.                                    |     так      |
| reason?    | рядок   | The reason that will be displayed in the guild's audit logs.        |      ні      |
| ...roleIDs | integer | The Ids of the roles.                                               |     так      |

## Приклад(и)

This will either remove or add specific roles from you:

```javascript
bot.command({
    name: 'setRoles',
    code: `
   $setRoles[$guildID;$authorID;Some reason.;roleID1;roleID2;roleID3;....]`
});
```