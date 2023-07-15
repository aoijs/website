---
title: '$findUser'
description: '$findUser will attempt to find a user which is matching with the given query.'
id: findUser
---

`$findUser` will attempt to find a user which is matching with the given query.

## Використання

```php
$findUser[userResolver;returnSelf?]
```

## Параметри

| Поле         | Тип     | Опис                                                                                  | Обов'язковий |
| ------------ | ------- | ------------------------------------------------------------------------------------- |:------------:|
| userResolver | рядок   | Query which is used to find the user.                                                 |     так      |
| returnSelf?  | boolean | Will return the user ID of the user who executed the command when user was not found. |      ні      |

## Приклад(и)

This will search for a user called Ferel, if it wont find the user then it'll return the command author's user ID:

```javascript
bot.command({
    name: 'findUser',
    code: `
  $findUser[Ferel;true]
  `
});
```
