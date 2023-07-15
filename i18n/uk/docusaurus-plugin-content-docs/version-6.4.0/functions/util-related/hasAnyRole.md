---
title: '$hasAnyRole'
description: '$hasAnyRole will check if the provided user has any of the roles listed in the roles argument.'
id: hasAnyRole
---

`$hasAnyRole` will check if the provided user has any of the roles listed in the roles argument.

## Використання

```php
$hasAnyRole[guildID;userID;...roles]
```

## Параметри

| Поле     | Тип     | Опис                                            | Обов'язковий |
| -------- | ------- | ----------------------------------------------- |:------------:|
| guildID  | integer | ID of the guild where the roles are present in. |     так      |
| userID   | integer | ID of the user.                                 |     так      |
| ...roles | integer | The roles that will be checked for.             |     так      |

## Приклад(и)

This will return `true` when the user has any of the listed roles:

```javascript
bot.command({
    name: 'hasAnyRole',
    code: `
  $hasAnyRole[$guildID;$authorID;$findRole[Owner];$findRole[Admin]]
  `
});
```
