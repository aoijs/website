---
title: '$archiveThread'
description: '$archiveThread will archive or unarchive a specific thread.'
id: archiveThread
---

`$archiveThread` will archive or unarchive a specific thread.

## Використання

```php
$archiveThread[threadID;channelID?;archive?;reason?]
```

## Параметри

| Поле       | Тип     | Опис                                                     | Обов'язковий |
| ---------- | ------- | -------------------------------------------------------- |:------------:|
| threadID   | integer | Thread ID.                                               |     так      |
| channelID? | integer | Channel ID of where the thread is located.               |      ні      |
| archive?   | boolean | Archive the given thread?                                |      ні      |
| reason?    | рядок   | Reason that will be displayed in the guild's audit logs. |      ні      |

## Приклад(и)

This will archive the created thread:

```javascript
bot.command({
    name: 'archiveThread',
    code: `
  $archiveThread[$channelID;$get[id];true;testing]
  $let[id;$createThread[$channelID;example;1440;public;$messageID;true]]  
  `
});
```
