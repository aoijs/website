---
title: '$forEachUser'
description: '$forEachUser will execute awaited commands for user across all guilds.'
id: forEachUser
---

`$forEachUser` will execute awaited commands for user across all guilds.

## Використання

```php
$forEachUser[time;awaitData;...awaitedCmds;endCmd]
```

## Параметри

| Поле           | Тип    | Опис                                                         | Обов'язковий |
| -------------- | ------ | ------------------------------------------------------------ |:------------:|
| time           | рядок  | How long it takes between each user to execute the next one. |     так      |
| awaitData      | object | Очікувані Дані.                                              |     так      |
| ...awaitedCmds | рядок  | Awaited Commands to execute.                                 |     так      |
| endCmd         | рядок  | Awaited Command to execute when loop ends.                   |     так      |

## Приклад(и)

This will log every (cached) user in your console:

```javascript
bot.command({
  name: "awaitData",
  code: `
  $forEachUser[1;{};returnUsers;]
  `
});

bot.awaitedCommand({
  name: "returnUsers",
  code: `
  $log[ $authorID ]
  `
});
```
