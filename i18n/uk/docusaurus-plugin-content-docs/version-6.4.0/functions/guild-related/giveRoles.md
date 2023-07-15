---
title: '$giveRoles'
description: '$giveRoles will give an specific user multiple or one specific role(s).'
id: giveRoles
---

`$giveRoles` will give an specific user multiple or one specific role(s).

## Використання

```php
$giveRoles[guildID;userID;reason?;...roles]
```

## Параметри

| Поле    | Тип     | Опис                                                         | Обов'язковий |
| ------- | ------- | ------------------------------------------------------------ |:------------:|
| guildID | integer | Of which guild the member should receive roles of.           |     так      |
| userID  | integer | The user ID of the guild member.                             |     так      |
| reason? | рядок   | The reason that will be displayed in the guild's audit logs. |      ні      |
| roles   | integer | The IDs of the roles to give.                                |     так      |

Please note that the bots **highest** role must be above the role you're trying to assign.

## Приклад(и)

This will assign you two role called "Admin" and "Moderator" (if present):

```javascript
bot.command({
    name: 'giveRoles',
    code: `
  $giveRoles[$guildID;$authorID;Some reason.;$findRole[Admin];$findRole[Moderator]]
  `
});
```