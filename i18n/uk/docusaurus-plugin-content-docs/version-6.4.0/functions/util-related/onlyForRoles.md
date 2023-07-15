---
title: '$onlyForRoles'
description: '$onlyForRoles will check if the user who executed the command has any of the listed roles and return a error message if not.'
id: onlyForRoles
---

`$onlyForRoles` will check if the user who executed the command has any of the listed roles and return a error message if not.

## Використання

```php
$onlyForRoles[...roleIds;error]
```

## Параметри

| Поле       | Тип             | Опис                                                                                 | Обов'язковий |
| ---------- | --------------- | ------------------------------------------------------------------------------------ |:------------:|
| ...roleIds | string, integer | Roles you want to limit the command to.                                              |     так      |
| error      | рядок           | Error to return when the command was not executed by any user with the listed roles. |      ні      |

## Приклад(и)

This will limit the command only to the listed channels:

```javascript
bot.command({
    name: "onlyForRoles",
    code: `
    Ok.
    $onlyForRoles[roleID;roleID;You can't use that command!]
    `
});
```