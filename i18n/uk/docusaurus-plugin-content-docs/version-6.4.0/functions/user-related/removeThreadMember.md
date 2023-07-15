---
title: '$removeThreadMember'
description: '$removeThreadMember will remove a given thread member from a given thread.'
id: removeThreadMember
---

`$removeThreadMember` will remove a given thread member from a given thread.

## Використання

```php
$removeThreadMember[channelID;threadID;userID;reason?]
```

## Параметри

| Поле      | Тип     | Опис                                                           | Обов'язковий |
| --------- | ------- | -------------------------------------------------------------- |:------------:|
| channelID | integer | The ID of the channel of where the thread is located in.       |     так      |
| threadID  | integer | The thread ID.                                                 |     так      |
| userID    | integer | The ID of the user that will be removed from the given thread. |     так      |
| reason?   | рядок   | Reason that will be displayed in the guild's audit logs.       |      ні      |

## Приклад(и)

This will remove the command author from a given thread:

```javascript
bot.command({
    name: 'removeThreadMember',
    code: `
   $removeThreadMember[$channelID;threadID;$authorID;Testing functions!]
  `
});
```