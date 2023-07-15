---
title: '$removeThreadMember'
description: '$removeThreadMember will remove a given thread member from a given thread.'
id: removeThreadMember
---

`$removeThreadMember` will remove a given thread member from a given thread.

## प्रोयोग

```php
$removeThreadMember[channelID;threadID;userID;reason?]
```

## पैरामीटर्स

| फील्ड     | टाइप     | डिस्क्रिप्शन                                                   |    चाहिए     |
| --------- | -------- | -------------------------------------------------------------- |:------------:|
| channelID | integer  | The ID of the channel of where the thread is located in.       |     true     |
| threadID  | integer  | The thread ID.                                                 |     true     |
| userID    | integer  | The ID of the user that will be removed from the given thread. |     true     |
| reason?   | स्ट्रिंग | Reason that will be displayed in the guild's audit logs.       | असत्य (नहीं) |

## ट्रू (हा)

This will remove the command author from a given thread:

```javascript
bot.command({
    name: 'removeThreadMember',
    code: `
   $removeThreadMember[$channelID;threadID;$authorID;Testing functions!]
  `
});
```