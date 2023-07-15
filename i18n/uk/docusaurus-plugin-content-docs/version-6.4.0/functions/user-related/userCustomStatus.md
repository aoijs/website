---
title: '$userCustomStatus'
description: '$userCustomStatus will return a user''s custom status.'
id: userCustomStatus
---

`$userCustomStatus` will return a user's custom status.

## Використання

```php
$userCustomStatus[guildID?;userID?;option?]
```

## Параметри

| Поле     | Тип     | Опис                                                                                                                                                  | Обов'язковий |
| -------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |:------------:|
| guildID? | integer | The role ID.                                                                                                                                          |      ні      |
| userID?  | integer | The user ID.                                                                                                                                          |      ні      |
| option?  | рядок   | Which part of the status will be returned <br /> 1. **state** (default) - returns the status text <br /> 2. **emoji** - returns the emoji |      ні      |

## Приклад(и)

This will return your status text if you have any:

```javascript
bot.command({
    name: 'userCustomStatus',
    code: `
  $userCustomStatus[$authorID;$guildID;state]
  `
});
```
