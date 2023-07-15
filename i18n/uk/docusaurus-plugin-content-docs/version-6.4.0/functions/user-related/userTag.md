---
title: '$userTag'
description: '$userTag will return a user''s username and discriminator.'
id: userTag
---

`$userTag` will return a user's username and discriminator.

## Використання

```php
$userTag[userID?]
```

## Параметри

| Поле    | Тип     | Опис         | Обов'язковий |
| ------- | ------- | ------------ |:------------:|
| userID? | integer | The user ID. |      ні      |

## Приклад(и)

This will return your username and discriminator:

```javascript
bot.command({
    name: 'userTag',
    code: `
  $userTag[$authorID]
  `
});
```
