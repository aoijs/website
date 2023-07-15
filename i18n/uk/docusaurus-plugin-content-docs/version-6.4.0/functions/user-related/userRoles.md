---
title: '$userRoles'
description: '$userRoles will return the roles of a specific user.'
id: userRoles
---

`$userRoles` will return the roles of a specific user.

## Використання

```php
$userRoles[userID?;guildID?;option?;sep?]
```

## Параметри

| Поле     | Тип     | Опис                                                                                                          | Обов'язковий |
| -------- | ------- | ------------------------------------------------------------------------------------------------------------- |:------------:|
| userID?  | integer | The user ID.                                                                                                  |      ні      |
| guildID? | integer | The guild ID.                                                                                                 |      ні      |
| option?  | рядок   | How to return the roles <br /> 1. **name** (default) <br /> 2. **id** <br /> 3. **mention** |      ні      |
| sep?     | рядок   | Separator to separate multiple returned values.                                                               |      ні      |

## Приклад(и)

This will return your roles:

```javascript
bot.command({
    name: 'userRoles',
    code: `
  $userRoles[$authorID;$guildID;id;, ]
  `
});
```
