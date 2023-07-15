---
title: '$leaveThread'
description: '$leaveThread will make the bot leave a specific thread.'
id: leaveThread
---

`$killShard` will make the bot leave a specific thread.

## Використання

```php
$leaveThread[channelID;threadID]
```

## Параметри

| Поле      | Тип     | Опис                                                     | Обов'язковий |
| --------- | ------- | -------------------------------------------------------- |:------------:|
| channelID | integer | The ID of the channel of where the thread is located in. |     так      |
| threadID  | integer | The ID of the thread.                                    |     так      |

## Приклад(и)

This will create a thread and make the bot leave after creation:

```javascript
bot.command({
    name: 'leaveThread',
    code: `
  $leaveThread[$channelID;$get[threadID]]
  $let[threadID;$createThread[$channelID;Example!;1440;public;$messageID;true]]
  `
});
```