---
title: $addThreadMember
description: '$addThreadMember додасть учасника в тему.'
id: addThreadMember
---

`$addThreadMember` буде додати учасника до теми.

## Використання

```php
$addThreadMember[channelID;threadID;userID;reason]
```

## Параметри

| Поле           | Тип   | Опис                                                      | Обов'язковий |
| -------------- | ----- | --------------------------------------------------------- |:------------:|
| ID каналу      | ціле  | ID каналу, де знаходиться тема.                           |     так      |
| ID гілки       | ціле  | Ідентифікатор теми (ID).                                  |     так      |
| ID користувача | ціле  | Користувач, якого слід додати до теми.                    |     так      |
| причина        | рядок | Причина, яка буде відображатися в журналі аудиту гільдії. |     так      |

## Приклад(и)

Це створить тему і додасть випадкового користувача до нього:

```javascript
bot.command({
    ім'я: 'addThreadMember',
    код: `
  $addThreadMember[$channelID;$get[id];$randomUserID;testing]
  $let[id;$createThread[$channelID;example;1440;public;$messageID;true]]  
  `
});
```
