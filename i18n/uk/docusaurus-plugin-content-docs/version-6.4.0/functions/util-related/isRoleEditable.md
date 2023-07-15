---
title: '$isRoleEditable'
description: '$isRoleEditable will check if the role is editable.'
id: isRoleEditable
---

`$isRoleEditable` will check if the role is editable.

## Використання

```php
$isRoleEditable[roleID;guildID?]
```

## Параметри

| Поле     | Тип     | Опис                                              | Обов'язковий |
| -------- | ------- | ------------------------------------------------- |:------------:|
| roleID   | integer | ID of the role you want to check if its editable. |     так      |
| guildID? | integer | The ID of the guild where the role exists.        |      ні      |

## Приклад(и)

This will check if a role called `Owner` is editable:

```javascript
bot.command({
    name: 'isRoleEditable',
    code: `
  $isRoleEditable[$findRole[Owner];$guildID]
  `
});
```
