---
title: '$forEachGuild'
description: '$forEachGuild will execute given awaited commands in every guild.'
id: forEachGuild
---

`$forEachGuild` will execute given awaited commands in every guild.

## Використання

```php
$forEachGuild[time;awaitData;...awaitedCmds;endCmd]
```

## Параметри

| Поле           | Тип    | Опис                                                      | Обов'язковий |
| -------------- | ------ | --------------------------------------------------------- |:------------:|
| time           | рядок  | How long it takes between each guild to execute the next. |     так      |
| awaitData      | object | Очікувані Дані.                                           |     так      |
| ...awaitedCmds | рядок  | Awaited Commands to execute.                              |     так      |
| endCmd?        | рядок  | Awaited Command to execute when loop ends.                |     так      |

## Приклад(и)

This will change the variable value of each guild to "test":

```javascript
bot.command({
    name: "forEachGuild",
    code: `
  $forEachGuild[2s;{"value": "test"};awaitedCommand;]
  `
});

bot.awaitedCommand({
    name: "awaitedCommand",
    code: `
  $setGuildVar[varname;$awaitData[value];$guildID]
  `
});
```