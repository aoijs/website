---
title: '$username'
description: '$username will return a user''s username.'
id: username
---

`$username` will return a user's username.

## Використання

```php
$username[userID?]
```

## Параметри

| Поле    | Тип     | Опис         | Обов'язковий |
| ------- | ------- | ------------ |:------------:|
| userID? | integer | The user ID. |      ні      |

## Приклад(и)

This will return your username:

```javascript
bot.command({
    name: 'username',
    code: `
  $username[$authorID]
  `
});
```
