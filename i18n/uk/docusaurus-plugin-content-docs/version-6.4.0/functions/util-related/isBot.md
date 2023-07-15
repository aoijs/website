---
title: '$isBot'
description: '$isBot will check if the given user is a bot.'
id: isBot
---

`$isBot` will check if the given user is a bot.

## Використання

```php
$isBot[userID?]
```

## Параметри

| Поле    | Тип     | Опис                               | Обов'язковий |
| ------- | ------- | ---------------------------------- |:------------:|
| userID? | integer | User id to check if they're a bot. |      ні      |

## Приклад(и)

This will return `true` as your bot is, obviously, a bot:

```javascript
bot.command({
    name: 'isBot',
    code: `
  $isBot[$clientID]
  `
});
```
