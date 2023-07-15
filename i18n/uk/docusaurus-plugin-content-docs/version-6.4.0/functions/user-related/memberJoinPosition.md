---
title: '$memberJoinPosition'
description: '$memberJoinPosition will return a members join position.'
id: memberJoinPosition
---

`$memberJoinPosition` will return a members join position.

## Використання

```php
$memberJoinPosition[userID?;guildID?]
```

## Параметри

| Поле     | Тип     | Опис                 | Обов'язковий |
| -------- | ------- | -------------------- |:------------:|
| userID?  | integer | The ID of the user.  |      ні      |
| guildID? | integer | The ID of the guild. |      ні      |

## Приклад(и)

This will return your join position, if you're the owner then it'd be `1`:

```javascript
bot.command({
    name: 'memberJoinPosition',
    code: `
  $memberJoinPosition[$authorID;$guildID]
  `
});
```
