---
title: $leaveThread
description: '$leaveThread заставит бота оставить определенную тему.'
id: leaveThread
---

`$killShard` заставит бота оставить определенную тему.

## Использование

```php
$leaveThread[channelID;threadID]
```

## Параметры

| Название  | Nbg   | Описание                                         | Нужно |
| --------- | ----- | ------------------------------------------------ |:-----:|
| ID канала | целое | Идентификатор канала, в котором находится поток. |  да   |
| threadID  | целое | Идентификатор темы.                              |  да   |

## Пример(ы)

Это создаст поток и заставит бота покинуть его после создания:

```javascript
bot.command({
    name: 'leaveThread',
    code: `
  $leaveThread[$channelID;$get[threadID]]
  $let[threadID;$createThread[$channelID;Example!;1440;public;$messageID;true]]
  `
});
```