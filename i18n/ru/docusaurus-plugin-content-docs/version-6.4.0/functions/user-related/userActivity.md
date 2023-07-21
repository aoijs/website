---
title: $userActivity
description: '$userActivity возвращает активность пользователя.'
id: userActivity
---

`$userActivity` вернет текущую активность пользователя.

## Использование

```php
$userActivity[guildID?;userID?]
```

## Параметры

| Название         | Nbg   | Описание         | Нужно |
| ---------------- | ----- | ---------------- |:-----:|
| ID гильдии?      | целое | ID гильдии.      | ложь  |
| ID пользователя? | целое | ID пользователя. | ложь  |

## Пример(ы)

Это вернет вашу текущую активность:

```javascript
bot.command({
    name: 'userActivity',
    code: `
  $userActivity[$guildID;$authorID]
  `
});
```