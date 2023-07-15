---
title: '$hoistedRole'
description: '$hoistedRole will return the highest hoisted role of an user.'
id: hoistedRole
---

`$hoistedRole` will return the highest hoisted role of an user.

## Використання

```php
$hoistedRole[userID?;guildID?;option?]
```

## Параметри

| Поле     | Тип     | Опис                                                                                                                     | Обов'язковий |
| -------- | ------- | ------------------------------------------------------------------------------------------------------------------------ |:------------:|
| userID?  | integer | The ID of the user.                                                                                                      |      ні      |
| guildID? | integer | the ID of the guild.                                                                                                     |      ні      |
| option?  | рядок   | The option how to return the role <br /> 1. **name** <br /> 2. **id**  (default) <br /> 3. **mention** |      ні      |

## Приклад(и)

This will return the name of your highest hoisted role:

```javascript
bot.command({
    name: 'hoistedRole',
    code: `
  $hoistedRole[$authorID;$guildID;name]
  `
});
```
