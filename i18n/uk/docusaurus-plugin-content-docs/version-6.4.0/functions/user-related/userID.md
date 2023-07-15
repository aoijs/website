---
title: '$userID'
description: '$userID will return a given user''s ID.'
id: userID
---

`$userID` will return a given user's ID.

## Використання

```php
$userID[user]
```

## Параметри

| Поле | Тип            | Опис                                                             | Обов'язковий |
| ---- | -------------- | ---------------------------------------------------------------- |:------------:|
| user | string, number | The name of the user who you want the user ID to be returned of. |     так      |

## Приклад(и)

This will return your user ID:

```javascript
bot.command({
    name: 'userID',
    code: `
  $userID[$username]
  `
});
```
