---
title: '$archiveThread'
description: '$archiveThread will archive or unarchive a specific thread.'
id: archiveThread
---

`$archiveThread` will archive or unarchive a specific thread.

## प्रोयोग

```php
$archiveThread[threadID;channelID?;archive?;reason?]
```

## पैरामीटर्स

| फील्ड      | टाइप     | डिस्क्रिप्शन                                             |    चाहिए     |
| ---------- | -------- | -------------------------------------------------------- |:------------:|
| threadID   | integer  | Thread ID.                                               |     true     |
| channelID? | integer  | Channel ID of where the thread is located.               | असत्य (नहीं) |
| archive?   | boolean  | Archive the given thread?                                | असत्य (नहीं) |
| reason?    | स्ट्रिंग | Reason that will be displayed in the guild's audit logs. | असत्य (नहीं) |

## ट्रू (हा)

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
