---
title: '$joinThread'
description: '$joinThread will make the bot join a specific thread.'
id: joinThread
---

`$joinThread` will make the bot join a specific thread.

## Використання

```php
$joinThread[channelID;threadID]
```

## Параметри

| Поле      | Тип     | Опис                                              | Обов'язковий |
| --------- | ------- | ------------------------------------------------- |:------------:|
| channelID | integer | The channel ID of where the thread is located in. |     так      |
| threadID  | integer | The ID of the thread.                             |     так      |

## Приклад(и)

This will create a thread in the current channel and add the bot to it:

```javascript
bot.command({
    name: 'joinThread',
    code: `
  $joinThread[$channelID;$get[threadID]]
  $let[threadID;$createThread[$channelID;Example!;1440;public;$messageID;true]]
  `
});
```