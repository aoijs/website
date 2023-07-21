---
title: $userDefaultAvatar
description: '$userDefaultAvatar вернёт стандартный аватар пользователя Discord данного пользователя.'
id: userDefaultAvatar
---

`$userDefaultAvatar` вернёт стандартный аватар пользователя Discord по умолчанию.

## Использование

```php
$userDefaultAvatar[userID?]
```

## Параметры

| Название         | Nbg   | Описание         | Нужно |
| ---------------- | ----- | ---------------- |:-----:|
| ID пользователя? | целое | ID пользователя. | ложь  |

## Пример(ы)

Это вернёт аватар пользователя Discord по умолчанию:

```javascript
bot.command({
    name: 'userDefaultAvatar',
    code: `
  $userDefaultAvatar[$authorID]
  `
});
```
