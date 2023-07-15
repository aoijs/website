---
title: '$deleteThread'
description: '$deleteThread will delete a given thread of a channel.'
id: deleteThread
---

`$deleteThread` will delete a given thread of a channel.

## Використання

```php
$deleteThread[channelID;threadID;reason?]
```

## Параметри

| Поле      | Тип     | Опис                                                          | Обов'язковий |
| --------- | ------- | ------------------------------------------------------------- |:------------:|
| channelID | integer | The ID of the channel where the thread exists in.             |     так      |
| threadID  | integer | The thread ID.                                                |     так      |
| reason?   | рядок   | The reason which will be displayed in the guild's audit logs. |      ні      |

## Приклад(и)

This will delete a thread of the channel where you execute the command in ( make sure to replace threadID with an actual thread ID ):

```javascript
bot.command({
    name: 'deleteThread',
    code: `
  $deleteThread[$channelID;threadID;Crazy Example.]
  `
});
```