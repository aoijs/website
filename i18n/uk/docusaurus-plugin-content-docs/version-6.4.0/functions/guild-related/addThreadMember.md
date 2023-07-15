---
title: '$addThreadMember'
description: '$addThreadMember will add a member to a thread.'
id: addThreadMember
---

`$addThreadMember` will add a member to a thread.

## Використання

```php
$addThreadMember[channelID;threadID;userID;reason]
```

## Параметри

| Поле      | Тип     | Опис                                                         | Обов'язковий |
| --------- | ------- | ------------------------------------------------------------ |:------------:|
| channelID | integer | Channel ID of where the thread is located.                   |     так      |
| threadID  | integer | The thread ID.                                               |     так      |
| userID    | integer | The user that should be added to the thread.                 |     так      |
| reason    | рядок   | The reason that will be displayed in the guild's audit logs. |     так      |

## Приклад(и)

This will create a thread and add random user to it:

```javascript
bot.command({
    name: 'addThreadMember',
    code: `
  $addThreadMember[$channelID;$get[id];$randomUserID;testing]
  $let[id;$createThread[$channelID;example;1440;public;$messageID;true]]  
  `
});
```
