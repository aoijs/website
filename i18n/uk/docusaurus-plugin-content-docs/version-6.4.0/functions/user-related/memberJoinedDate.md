---
title: '$memberJoinDate'
description: '$memberJoinDate will return a members join date in MS.'
id: memberJoinDate
---

`$memberJoinDate` will return a members join date in MS.

## Використання

```php
$memberJoinDate[userID?;guildID?]
```

## Параметри

| Поле     | Тип     | Опис                 | Обов'язковий |
| -------- | ------- | -------------------- |:------------:|
| userID?  | integer | The ID of the user.  |      ні      |
| guildID? | integer | The ID of the guild. |      ні      |

## Приклад(и)

This will return your join date in MS and parsed date:

```javascript
bot.command({
    name: 'memberJoinDate',
    code: `
  $memberJoinDate[$authorID;$guildID] -> $parseDate[$memberJoinDate[$authorID;$guildID]]
  `
});
```
