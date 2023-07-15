---
title: '$userExists'
description: '$userExists will check if a given user exists.'
id: userExists
---

`$userExists` will check if a given user exists.

## Використання

```php
$userExists[userID?]
```

## Параметри

| Поле    | Тип     | Опис         | Обов'язковий |
| ------- | ------- | ------------ |:------------:|
| userID? | integer | The user ID. |      ні      |

## Приклад(и)

This will return either `true` or `false` depending on if the user exists, in this example below it will return `true` as you exist as Discord user:

```javascript
bot.command({
    name: 'userExists',
    code: `
  $userExists[$authorID]
  `
});
```
