---
title: '$addApplicationCommandPermissions'
description: '$addApplicationCommandPermissions will change permissions of a slash command.'
id: addApplicationCommandPermissions
---

## Використання

```php
$addApplicationCommandPermissions[guildID/global?;id;...perms]
```

## Параметри

| Поле           | Тип             | Опис                                                                                    | Обов'язковий |
| -------------- | --------------- | --------------------------------------------------------------------------------------- |:------------:|
| guildID/global | string, integer | Application command type. <br/> 1. **global** <br/> 2. **specific guildID** |     так      |
| id             | integer         | Application command ID.                                                                 |     так      |
| ...perms       | рядок           | Permissions.                                                                            |     так      |

## Приклад(и)

This will disable the slash command for everyone in the guild ( make sure to replace "ID" with the actual slash command ID ):

```javascript
bot.command({
    name: 'addApplicationCommandPermissions',
    code: `
    $addApplicationCommandPermissions[$guildID;ID;[
  {
    id: '$guildID',
    type: 'ROLE',
    permission: false
  }
]]`
});
```
