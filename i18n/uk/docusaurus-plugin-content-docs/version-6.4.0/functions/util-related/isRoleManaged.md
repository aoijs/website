---
title: '$isRoleManaged'
description: '$isRoleManaged will check if a certain role is managed by Discord.'
id: isRoleManaged
---

`$isRoleManaged` will check if a certain role is managed by Discord.

## Використання

```php
$isRoleManaged[roleID;guildID?]
```

## Параметри

| Поле     | Тип     | Опис                                                                | Обов'язковий |
| -------- | ------- | ------------------------------------------------------------------- |:------------:|
| roleID   | integer | ID of the role you want to check if it's managed by Discord or not. |     так      |
| guildID? | integer | ID of the guild where the role exists.                              |      ні      |

## Приклад(и)

This will check if a role called `Server Booster` is managed by Discord and return either `true` or `false`:

```javascript
bot.command({
    name: 'isRoleManaged',
    code: `
  $isRoleManaged[$findRole[Server Booster];$guildID]
  `
});
```
