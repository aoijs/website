---
title: '$unban'
description: '$unban will unban a given user.'
id: unban
---

`$unban` will unban a given user.

## Використання

```php
$unban[guildID;userID;reason?]
```

## Параметри

| Поле    | Тип     | Опис                                                                       | Обов'язковий |
| ------- | ------- | -------------------------------------------------------------------------- |:------------:|
| guildID | integer | The guild ID of where the user is banned in.                               |     так      |
| userID  | integer | The ID of the user which will be unbanned.                                 |     так      |
| reason? | рядок   | The reason for the unban that will be displayed in the guild's audit logs. |      ні      |

## Приклад(и)

This will unban a given user:

```javascript
bot.command({
    name: 'unban',
    code: `
  $unban[$guildID;$randomUserID;Some reason.]
  `
});
```