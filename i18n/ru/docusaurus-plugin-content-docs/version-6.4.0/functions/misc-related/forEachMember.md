---
title: $forEachMember
description: '$forEachMember будет выполнять ожидаемые команды для пользователя в рамках текущей гильдии.'
id: forEachMember
---

`$forEachMember` будет выполнять ожидаемые команды для пользователя в рамках текущей гильдии.

## Использование

```php
$forEachMember[time;awaitData;...awaitedCmds;endCmd]
```

## Параметры

| Название          | Nbg    | Описание                                                        | Нужно |
| ----------------- | ------ | --------------------------------------------------------------- |:-----:|
| время             | строка | Как долго между каждым участником займёт выполнение следующего. |  да   |
| ожидать данных    | объект | Ожидаемые данные.                                               |  да   |
| ...ожидаемые Cmds | строка | Ожидающие выполнения команд.                                    |  да   |
| endCmd            | строка | Ожидается выполнение команды по окончании цикла.                |  да   |

## Пример(ы)


```javascript
bot.command({
  name: "awaitData",
  code: `
  $forEachMember[1s;{ "members": "$membersCount" };returnMembers;]
  `
});

бот. waitedCommand({
  name: "returnMembers",
  code: `
  $log[ $authorID , is one out of $awaitData[members] members ]
  `
});
```