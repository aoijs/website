---
title: '$setUserNickname'
description: '$setUserNickname will change a nickname of a guild member.'
id: setUserNickname
---

`$setUserNickname` will change a nickname of a guild member.

## Використання

```php
$setUserNickname[userID;newName;reason?]
```

## Параметри

| Поле    | Тип            | Опис                                                     | Обов'язковий |
| ------- | -------------- | -------------------------------------------------------- |:------------:|
| userID  | integer        | The user ID of the user whose nickname shall be changed. |     так      |
| newName | string, number | Their new nickname.                                      |     так      |
| reason? | string, number | Reason that will be displayed in the guild's audit logs. |      ні      |

## Приклад(и)

This will change your nickname to "I love aoi.js": (wont work if you're the guild owner)

```javascript
bot.command({
    name: 'setUserNickname',
    code: `
  $setUserNickname[$authorID;I love aoi.js;They simply love aoi.js]
  `
});
```
