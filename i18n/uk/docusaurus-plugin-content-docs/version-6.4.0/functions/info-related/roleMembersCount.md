---
title: '$roleMembersCount'
description: '$roleMembersCount will return the amount of members who have a specific role.'
id: roleMembersCount
---

`$roleMembersCount` will return the amount of members who have a specific role.

## Використання

```php
$roleMembersCount[roleID;guildID?]
```

## Параметри

| Поле     | Тип     | Опис          | Обов'язковий |
| -------- | ------- | ------------- |:------------:|
| roleID   | integer | The role ID.  |     так      |
| guildID? | integer | The guild ID. |      ні      |

## Приклад(и)

This will return the amount of users who have a specific role:

```javascript
bot.command({
    name: 'roleMembersCount',
    code: `
  $roleMembersCount[$guildID;$guildID]
  `
});
```