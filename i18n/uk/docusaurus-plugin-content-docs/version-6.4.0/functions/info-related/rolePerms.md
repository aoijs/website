---
title: '$rolePerms'
description: '$rolePerms will return all given permissions of a role.'
id: rolePerms
---

`$rolePerms` will return all given permissions of a role.

## Використання

```php
$rolePerms[roleID;sep?;guildID?]
```

## Параметри

| Поле     | Тип     | Опис                                            | Обов'язковий |
| -------- | ------- | ----------------------------------------------- |:------------:|
| roleID   | integer | The role ID.                                    |     так      |
| sep?     | integer | Separator to separate multiple returned values. |      ні      |
| guildID? | integer | The guild ID.                                   |      ні      |

## Приклад(и)

This will return the permissions for the `@everyone` role:

```javascript
bot.command({
    name: 'rolePerms',
    code: `
  $rolePerms[$guildID;, ;$guildID]
  `
});
```
