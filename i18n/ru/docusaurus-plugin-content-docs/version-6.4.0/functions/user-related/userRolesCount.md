---
title: $userRolesCount
description: '$userRolesCount возвращает количество ролей пользователя.'
id: userRolesCount
---

`$userRolesCount` возвращает количество ролей пользователя.

## Использование

```php
$userRolesCount[userID?;guildID?]
```

## Параметры

| Название         | Nbg   | Описание         | Нужно |
| ---------------- | ----- | ---------------- |:-----:|
| ID пользователя? | целое | ID пользователя. | false |
| ID гильдии?      | целое | ID гильдии.      | false |

## Пример(ы)

Будет возвращено количество ролей, которые вы назначили:

```javascript
bot.command({
    name: 'userRolesCount',
    code: `
  $userRolesCount[$authorID;$guildID]
  `
});
```
