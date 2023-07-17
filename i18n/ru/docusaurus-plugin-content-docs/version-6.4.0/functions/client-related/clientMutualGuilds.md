---
title: '$clientMutualGuilds'
description: '$clientMutualGuilds вернет общие серверы с данным пользователем и ботом.'
id: clientMutualGuilds
---

`$clientMutualGuilds` возвращает общие серверы с данным пользователем и ботом.

## Использование

```php
$clientMutualGuilds[userID?;sep?]
```

## Параметры

| Название         | Nbg    | Описание                                          | Нужно |
| ---------------- | ------ | ------------------------------------------------- |:-----:|
| ID пользователя? | целое  | ID пользователя.                                  | ложь  |
| sep?             | строка | Разделитель для разделения возвращаемых значений. | ложь  |

## Пример(ы)

Это приведет к возврату общих серверов вас и бота:

```javascript
bot.command({
    name: 'clientMutualGuilds',
    code: `
  $clientMutualGuilds[$authorID;, ]
  `
});
```
