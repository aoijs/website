---
title: $joinThread
description: '$joinThread заставит бота присоединиться к определенной теме.'
id: joinThread
---

`$joinThread` заставит бота присоединиться к определенному потоку.

## Использование

```php
$joinThread[channelID;threadID]
```

## Параметры

| Название  | Nbg   | Описание                              | Нужно |
| --------- | ----- | ------------------------------------- |:-----:|
| ID канала | целое | ID канала, в котором находится поток. |  да   |
| threadID  | целое | Идентификатор темы.                   |  да   |

## Пример(ы)

Это создаст поток в текущем канале и добавит к нему бота:

```javascript
bot.command({
    name: 'joinThread',
    code: `
  $joinThread[$channelID;$get[threadID]]
  $let[threadID;$createThread[$channelID;Example!;1440;public;$messageID;true]]
  `
});
```