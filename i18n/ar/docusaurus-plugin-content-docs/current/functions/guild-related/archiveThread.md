---
title: '$archiveThread'
description: '$archiveThread will archive or unarchive a specific thread.'
id: archiveThread
---

`$archiveThread` will archive or unarchive a specific thread.

## الاستخدام

```php
$archiveThread[threadID;channelID?;archive?;reason?]
```

## البارامترات

| Field      | النوع   | الديسكبربشين                                             | مطلوب |
| ---------- | ------- | -------------------------------------------------------- |:-----:|
| threadID   | Integer | Thread ID.                                               | true  |
| channelID? | Integer | Channel ID of where the thread is located.               | false |
| archive?   | boolean | Archive the given thread?                                | false |
| reason?    | string  | Reason that will be displayed in the guild's audit logs. | false |

## مثال

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
