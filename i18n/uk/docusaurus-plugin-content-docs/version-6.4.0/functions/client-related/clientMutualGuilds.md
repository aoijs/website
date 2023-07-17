---
title: '$clientMutualGuilds'
description: '$clientMutualGuilds поверне взаємні сервери з даним користувачем і ботом.'
id: clientMutualGuilds
---

`$clientMutualGuilds` поверне взаємні сервери з даним користувачем і ботом.

## Використання

```php
$clientMutualGuilds[userID?;sep?]
```

## Параметри

| Поле            | Тип   | Опис                                             | Обов'язковий |
| --------------- | ----- | ------------------------------------------------ |:------------:|
| ID користувача? | ціле  | ID користувача.                                  |      ні      |
| місце?          | рядок | Розділювач для відокремлення очікуваних значень. |      ні      |

## Приклад(и)

Це поверне спільне сервери вас і бота:

```javascript
bot.command({
    name: 'clientMutualGuilds',
    код: `
  $clientMutualGuilds[$authorID;, ]
  `
});
```
