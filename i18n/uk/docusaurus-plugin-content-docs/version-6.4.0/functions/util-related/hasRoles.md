---
title: '$hasRoles'
description: '$hasRoles check if the provided user has the roles listed in the roles argument.'
id: hasRoles
---

`$hasRoles` check if the provided user has the roles listed in the roles argument.

## Використання

```php
$hasRoles[guildID;userID;...roles]
```

## Параметри

| Поле     | Тип     | Опис                                            | Обов'язковий |
| -------- | ------- | ----------------------------------------------- |:------------:|
| guildID  | integer | ID of the guild where the roles are present in. |     так      |
| userID   | integer | ID of the user which has the roles.             |     так      |
| ...roles | integer | The roles that will be checked for.             |     так      |

## Приклад(и)

This will return `true` when the user has the listed roles:

```javascript
bot.command({
    name: 'hasRoles',
    code: `
  $hasRoles[$guildID;$authorID;$findRole[Owner]]
  `
});
```
