---
title: '$highestRole'
description: '$highestRole will return the highest role of a specific user.'
id: highestRole
---

`$highestRole` will return the highest role of a specific user.

## Використання

```php
$highestRole[userID?;guildID?;option?]
```

## Параметри

| Поле     | Тип     | Опис                                                                                                                    | Обов'язковий |
| -------- | ------- | ----------------------------------------------------------------------------------------------------------------------- |:------------:|
| userID?  | integer | The ID of the user you want the highest role to be returned of.                                                         |      ні      |
| guildID? | integer | The ID of the guild.                                                                                                    |      ні      |
| option?  | рядок   | The option how to return the role <br /> 1. **name** <br /> 2. **id** (default) <br /> 3. **mention** |      ні      |

## Приклад(и)

This will return the name of your highest role:

```javascript
bot.command({
    name: 'highestRole',
    code: `
  $highestRole[$authorID;$guildID;name]
  `
});
```
