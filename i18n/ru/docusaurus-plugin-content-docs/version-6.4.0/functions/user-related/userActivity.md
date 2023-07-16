---
title: $userActivity
description: '$activity возвращает активность пользователя.'
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
| ID гильдии?      | целое | ID гильдии.      | false |
| ID пользователя? | целое | ID пользователя. | false |

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