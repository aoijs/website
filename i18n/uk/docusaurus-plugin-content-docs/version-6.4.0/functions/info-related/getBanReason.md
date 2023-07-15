---
title: '$getBanReason'
description: '$getBanReason will return a ban reason of an specific user.'
id: getBanReason
---

`$getBanReason` will return a ban reason of an specific user.

## Використання

```php
$getBanReason[guildID?;userID?]
```

## Параметри

| Поле     | Тип     | Опис                                                         | Обов'язковий |
| -------- | ------- | ------------------------------------------------------------ |:------------:|
| guildID? | integer | The guild ID.                                                |      ні      |
| userID?  | integer | The user ID of the user you want to check the ban reason of. |      ні      |

## Приклад(и)

This will return the ban reason of whoever you'd like:

```javascript
bot.command({
    name: 'getBanReason',
    code: `
  $getBanReason[$guildID;userID] 
  ` // make sure to replace "userID" with an actual user ID
});
```