---
title: '$removeThreadMember'
description: '$removeThreadMember удалит данного участника из данного потока.'
id: removeThreadMember
---

`$removeThreadMember` удалит данного участника из данного потока.

## Использование

```php
$removeThreadMember[channelID;threadID;userID;reason?]
```

## Параметры

| Название        | Nbg    | Описание                                                      | Нужно |
| --------------- | ------ | ------------------------------------------------------------- |:-----:|
| ID канала       | целое  | Идентификатор канала, в котором находится поток.              |  да   |
| threadID        | целое  | Идентификатор потока.                                         |  да   |
| ID пользователя | целое  | ID пользователя, который будет удален из заданного потока.    |  да   |
| причина?        | строка | Причина, которая будет отображаться в журнале аудита гильдии. | ложь  |

## Пример(ы)

Это удалит автора команды из заданного потока:

```javascript
bot.command({
    name: 'removeThreadMember',
    code: `
   $removeThreadMember[$channelID;threadID;$authorID;Testing functions!]
  «
});
```