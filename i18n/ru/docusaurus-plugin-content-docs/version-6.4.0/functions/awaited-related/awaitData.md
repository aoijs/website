---
title: $awaitData
description: '$awaitData вернется в ожидаемые данные, указанные в ожидаемых командах.'
id: awaitData
---

`$awaitData` возвращает ожидаемые данные в ожидаемых командах.

## Использование

```php
$awaitData[name]
```

## Параметры

| Название | Nbg    | Описание              | Нужно |
| -------- | ------ | --------------------- |:-----:|
| название | строка | Ожидаемое имя данных. |  да   |

## Пример(ы)

Это вернёт ID каждого участника сервера и введет его в консоль:

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
