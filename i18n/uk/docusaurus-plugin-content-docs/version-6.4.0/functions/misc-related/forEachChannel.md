---
title: '$forEachChannel'
description: '$forEachChannel will execute awaited commands in every channel of every guild.'
id: forEachChannel
---

`$forEachChannel` will execute awaited commands in every channel of every guild.

## Використання

```php
$forEachChannel[time;awaitData;...awaitedCmds;endCmd]
```

## Параметри

| Поле           | Тип    | Опис                                                        | Обов'язковий |
| -------------- | ------ | ----------------------------------------------------------- |:------------:|
| time           | рядок  | How long it takes between each channel to execute the next. |     так      |
| awaitData      | object | Очікувані Дані.                                             |     так      |
| ...awaitedCmds | рядок  | Awaited Commands to execute.                                |     так      |
| endCmd         | рядок  | Awaited Command to execute when loop ends.                  |     так      |

## Приклад(и)

This will change the variable value of each channel to "test":

```javascript
bot.command({
    name: "forEachChannel",
    code: `
  $forEachChannel[2s;{"value": "test"};awaitedCommand;]
  `
});

bot.awaitedCommand({
    name: "awaitedCommand",
    code: `
  $setChannelVar[varname;$awaitData[value];$channelID]
  `
});
```