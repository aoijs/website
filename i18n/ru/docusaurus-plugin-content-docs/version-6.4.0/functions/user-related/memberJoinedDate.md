---
title: $memberJoinedDate
description: '$memberJoinDate возвращает дату регистрации в MS.'
id: memberJoinedDate
---

`$memberJoinDate` вернет участников в MS.

## Использование

```php
$memberJoinDate[userID?;guildID?]
```

## Параметры

| Название         | Nbg   | Описание         | Нужно |
| ---------------- | ----- | ---------------- |:-----:|
| ID пользователя? | целое | ID пользователя. | ложь  |
| ID гильдии?      | целое | ID гильдии.      | ложь  |

## Пример(ы)

Дата регистрации будет возвращена в MS и дату:

```javascript
bot.command({
    name: 'memberJoinDate',
    code: `
  $memberJoinDate[$authorID;$guildID] -> $parseDate[$memberJoinDate[$authorID;$guildID]]
  `
});
```
