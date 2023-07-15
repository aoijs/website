---
title: '$addThreadMember'
description: '$addThreadMember will add a member to a thread.'
id: addThreadMember
---

`$addThreadMember` will add a member to a thread.

## الاستخدام

```php
$addThreadMember[channelID;threadID;userID;reason]
```

## البارامترات

| Field     | النوع   | الديسكبربشين                                                 | مطلوب |
| --------- | ------- | ------------------------------------------------------------ |:-----:|
| channelID | Integer | Channel ID of where the thread is located.                   | true  |
| threadID  | Integer | The thread ID.                                               | true  |
| userID    | Integer | The user that should be added to the thread.                 | true  |
| reason    | string  | The reason that will be displayed in the guild's audit logs. | true  |

## مثال

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
