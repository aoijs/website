---
title: '$removeThreadMember'
description: '$removeThreadMember will remove a given thread member from a given thread.'
id: removeThreadMember
---

`$removeThreadMember` will remove a given thread member from a given thread.

## الاستخدام

```php
$removeThreadMember[channelID;threadID;userID;reason?]
```

## البارامترات

| Field     | النوع   | الديسكبربشين                                                   | مطلوب |
| --------- | ------- | -------------------------------------------------------------- |:-----:|
| channelID | Integer | The ID of the channel of where the thread is located in.       | true  |
| threadID  | Integer | The thread ID.                                                 | true  |
| userID    | Integer | The ID of the user that will be removed from the given thread. | true  |
| reason?   | string  | Reason that will be displayed in the guild's audit logs.       | false |

## مثال

This will remove the command author from a given thread:

```javascript
bot.command({
    name: 'removeThreadMember',
    code: `
   $removeThreadMember[$channelID;threadID;$authorID;Testing functions!]
  `
});
```