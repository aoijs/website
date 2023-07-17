---
title: '$addThreadMember'
description: '$addThreadMember добавит участника в тему.'
id: addThreadMember
---

`$addThreadMember` добавит участника в тему.

## Использование

```php
$addThreadMember[channelID;threadID;userID;reason]
```

## Параметры

| Название        | Nbg    | Описание                                                      | Нужно |
| --------------- | ------ | ------------------------------------------------------------- |:-----:|
| ID канала       | целое  | ID канала где находится поток.                                |  да   |
| threadID        | целое  | Идентификатор потока.                                         |  да   |
| ID пользователя | целое  | Пользователь, который должен быть добавлен в тему.            |  да   |
| причина         | строка | Причина, которая будет отображаться в журнале аудита гильдии. |  да   |

## Пример(ы)

Это создаст поток и добавит к нему случайного пользователя:

```javascript
bot.command({
    name: 'addThreadMember',
    code: `
  $addThreadMember[$channelID;$get[id];$randomUserID;testing]
  $let[id;$createThread[$channelID;example;1440;public;$messageID;true]]  
  `
});
```
