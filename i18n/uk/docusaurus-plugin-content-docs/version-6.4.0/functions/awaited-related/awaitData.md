---
title: '$awaitData'
description: '$awaitData will return awaited data given in awaited commands.'
id: awaitData
---

`$awaitData` will return awaited data given in awaited commands.

## Використання

```php
$awaitData[name]
```

## Параметри

| Поле  | Тип   | Опис               | Обов'язковий |
| ----- | ----- | ------------------ |:------------:|
| назва | рядок | Awaited Data Name. |     так      |

## Приклад(и)

This will return the ID of every server member and log it in your console:

```javascript
bot.command({
  name: "awaitData",
  code: `
  $forEachMember[1s;{ "members": "$membersCount" };returnMembers;]
  `
});

bot.awaitedCommand({
  name: "returnMembers",
  code: `
  $log[ $authorID , is one out of $awaitData[members] members ]
  `
});
```
