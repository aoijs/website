---
title: '$userActivity'
description: '$activity will return a user''s activity.'
id: userActivity
---

`$userActivity` will return a user's current activity.

## Використання

```php
$userActivity[guildID?;userID?]
```

## Параметри

| Поле     | Тип     | Опис          | Обов'язковий |
| -------- | ------- | ------------- |:------------:|
| guildID? | integer | The guild ID. |      ні      |
| userID?  | integer | The user ID.  |      ні      |

## Приклад(и)

This will return your current Activity:

```javascript
bot.command({
    name: 'userActivity',
    code: `
  $userActivity[$guildID;$authorID]
  `
});
```