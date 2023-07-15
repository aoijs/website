---
title: '$deleteRoles'
description: '$deleteRoles will delete one or multiple roles.'
id: deleteRoles
---

`$deleteRoles` will delete one or multiple roles.

## Використання

```php
$deleteRoles[guildID;...roles]
```

## Параметри

| Поле     | Тип             | Опис                                            | Обов'язковий |
| -------- | --------------- | ----------------------------------------------- |:------------:|
| guildID  | integer         | The guild ID of where the roles are located in. |     так      |
| ...roles | integer, string | The Ids of the roles.                           |     так      |

## Приклад(и)

This will delete roles of your guilds ( make sure to add actual IDs ):

```javascript
bot.command({
    name: 'deleteRoles',
    code: `
  Deleted three roles!
  $deleteRoles[$guildID;roleID1;roleID2;roleID3]
  `
});
```