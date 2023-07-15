---
title: '$isUserDmEnabled'
description: '$isUserDmEnabled will check if the user''s Direct Messages are either disabled or enabled.'
id: isUserDmEnabled
---

`$isUserDmEnabled` will check if the user's Direct Messages are either disabled or enabled.

## Використання

```php
$isUserDmEnabled[userID]
```

## Параметри

| Поле   | Тип     | Опис                                                              | Обов'язковий |
| ------ | ------- | ----------------------------------------------------------------- |:------------:|
| userID | integer | ID of the user you want to check if their dms are enabled or not. |     так      |

## Приклад(и)

This will return either `true` or `false` depending on if your Direct Messages are enabled or disabled:

```javascript
bot.command({
    name: 'isUserDmEnabled',
    code: `
  $isUserDmEnabled[$authorID]
  `
});
```
