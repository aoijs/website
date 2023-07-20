---
title: $username
description: '$username вернет имя пользователя.'
id: username
---

`$username` вернет имя пользователя.

## Использование

```php
$username[userID?]
```

## Параметры

| Название         | Nbg   | Описание         | Нужно |
| ---------------- | ----- | ---------------- |:-----:|
| ID пользователя? | целое | ID пользователя. | ложь  |

## Пример(ы)

Это вернёт ваше имя пользователя:

```javascript
bot.command({
    name: 'username',
    code: `
  $username[$authorID]
  `
});
```
