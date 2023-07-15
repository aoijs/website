---
title: '$clientMutualGuilds'
description: '$clientMutualGuilds will return the mutual servers with a given user and the bot.'
id: clientMutualGuilds
---

`$clientMutualGuilds` will return the mutual servers with a given user and the bot.

## Використання

```php
$clientMutualGuilds[userID?;sep?]
```

## Параметри

| Поле    | Тип     | Опис                                           | Обов'язковий |
| ------- | ------- | ---------------------------------------------- |:------------:|
| userID? | integer | The ID of the user.                            |      ні      |
| sep?    | рядок   | The separator to separate the returned values. |      ні      |

## Приклад(и)

This will return the mutual servers of you and the bot:

```javascript
bot.command({
    name: 'clientMutualGuilds',
    code: `
  $clientMutualGuilds[$authorID;, ]
  `
});
```
