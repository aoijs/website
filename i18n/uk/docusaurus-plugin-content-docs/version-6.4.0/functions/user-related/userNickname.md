---
title: '$userNickname'
description: '$userNickname will return a user''s nickname.'
id: userNickname
---

`$userNickname` will return a user's nickname.

## Використання

```php
$userNickname[guildID?;userID?;returnUser?]
```

## Параметри

| Поле        | Тип     | Опис                                                                             | Обов'язковий |
| ----------- | ------- | -------------------------------------------------------------------------------- |:------------:|
| guildID?    | integer | The ID of the guild.                                                             |      ні      |
| userID?     | integer | The ID of the user.                                                              |      ні      |
| returnUser? | boolean | Return the username <br /> 1. **true** <br /> 2. **false** (default) |      ні      |

## Приклад(и)

This will return your nickname, if you have none then it'll return your Discord username:

```javascript
bot.command({
    name: 'nickname',
    code: `
  $userNickname[$guildID;$authorID;true]
  `
});
```
