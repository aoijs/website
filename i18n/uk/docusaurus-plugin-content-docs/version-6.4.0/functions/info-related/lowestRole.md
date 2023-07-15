---
title: '$lowestRole'
description: '$lowestRole will return the lowest role of a specific user.'
id: lowestRole
---

`$lowestRole` will return the lowest role of a specific user.

## Використання

```php
$lowestRole[userID?;guildID?]
```

## Параметри

| Поле     | Тип     | Опис                                                       | Обов'язковий |
| -------- | ------- | ---------------------------------------------------------- |:------------:|
| userID?  | integer | ID of the user you want the lowest role to be returned of. |      ні      |
| guildID? | integer | The ID of the guild.                                       |      ні      |

## Приклад(и)

This will return the ID of your lowest role:

```javascript
bot.command({
    name: 'lowestRole',
    code: `
  $lowestRole[$authorID;$guildID]
  `
});
```
