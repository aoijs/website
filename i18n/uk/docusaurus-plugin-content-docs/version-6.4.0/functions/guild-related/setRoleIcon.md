---
title: '$setRoleIcon'
description: '$setRoleIcon will set the icon of a specific role.'
id: setRoleIcon
---

`$setRoleIcon` will set the icon of a specific role.

## Використання

```php
$setRoleIcon[guildID;roleID;icon]
```

## Параметри

| Поле    | Тип     | Опис                                       | Обов'язковий |
| ------- | ------- | ------------------------------------------ | ------------ |
| guildID | integer | The ID of the guild where the role exists. | ні           |
| roleID  | integer | The role ID.                               | ні           |
| icon    | рядок   | The URL of the icon.                       | ні           |

## Приклад(и)

This will change the icon of a given role to the specified icon:

```javascript
bot.command({
    name: 'setRoleIcon',
    code: `
  $setRoleIcon[$guildID;roleID;iconURL]
  `
});
```