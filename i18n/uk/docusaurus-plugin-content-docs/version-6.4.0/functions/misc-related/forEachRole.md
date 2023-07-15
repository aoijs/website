---
title: '$forEachRole'
description: '$forEachRole will execute awaited commands for every role in a given guild.'
id: forEachRole
---

`$forEachRole` will execute awaited commands for every role in a given guild.

## Використання

```php
$forEachRole[guildID;time;awaitData;...awaitedCmds;endCmd]
```

## Параметри

| Поле           | Тип    | Опис                                                     | Обов'язковий |
| -------------- | ------ | -------------------------------------------------------- |:------------:|
| time           | рядок  | How long it takes between each role to execute the next. |     так      |
| awaitData      | object | Очікувані Дані.                                          |     так      |
| ...awaitedCmds | рядок  | Awaited Commands to execute.                             |     так      |
| endCmd         | рядок  | Awaited Command to execute when loop ends.               |     так      |