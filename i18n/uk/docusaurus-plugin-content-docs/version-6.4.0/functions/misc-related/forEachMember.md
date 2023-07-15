---
title: '$forEachMember'
description: '$forEachMember will execute awaited commands for user within the current guild.'
id: forEachMember
---

`$forEachMember` will execute awaited commands for user within the current guild.

## Використання

```php
$forEachMember[time;awaitData;...awaitedCmds;endCmd]
```

## Параметри

| Поле           | Тип    | Опис                                                       | Обов'язковий |
| -------------- | ------ | ---------------------------------------------------------- |:------------:|
| time           | рядок  | How long it takes between each member to execute the next. |     так      |
| awaitData      | object | Очікувані Дані.                                            |     так      |
| ...awaitedCmds | рядок  | Awaited Commands to execute.                               |     так      |
| endCmd         | рядок  | Awaited command to execute when loop ends.                 |     так      |

## Приклад(и)


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