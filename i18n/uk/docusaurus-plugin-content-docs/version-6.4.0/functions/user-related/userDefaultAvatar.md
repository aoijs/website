---
title: '$userDefaultAvatar'
description: '$userDefaultAvatar will return the given user''s default Discord User Avatar.'
id: userDefaultAvatar
---

`$userDefaultAvatar` will return the given user's default Discord User Avatar.

## Використання

```php
$userDefaultAvatar[userID?]
```

## Параметри

| Поле    | Тип     | Опис                | Обов'язковий |
| ------- | ------- | ------------------- |:------------:|
| userID? | integer | The ID of the user. |      ні      |

## Приклад(и)

This will return your default Discord User Avatar:

```javascript
bot.command({
    name: 'userDefaultAvatar',
    code: `
  $userDefaultAvatar[$authorID]
  `
});
```
