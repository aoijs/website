---
title: '$usersWithRole'
description: '$usersWithRole will return the users who have a specific role.'
id: usersWithRole
---

`$usersWithRole` will return the users who have a specific role.

## Використання

```php
$usersWithRole[roleID;guildID?;option?;sep?]
```

## Параметри

| Поле     | Тип     | Опис                                                                                 | Обов'язковий |
| -------- | ------- | ------------------------------------------------------------------------------------ |:------------:|
| roleID   | integer | The role ID.                                                                         |     так      |
| guildID? | integer | The guild ID.                                                                        |      ні      |
| option?  | рядок   | How to return the users <br /> 1. **id** (default) <br /> 2. **mention** |      ні      |
| sep?     | рядок   | Separator to separate multiple returned values.                                      |      ні      |

## Приклад(и)

This will return the users of a specific role, make sure to replace roleID:

```javascript
bot.command({
    name: 'usersWithRole',
    code: `
  $usersWithRole[roleID;$guildID;id;, ]
  `
});
```
