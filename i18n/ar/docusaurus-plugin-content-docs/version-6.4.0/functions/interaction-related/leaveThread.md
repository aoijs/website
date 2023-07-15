---
title: '$leaveThread'
description: '$leaveThread will make the bot leave a specific thread.'
id: leaveThread
---

`$killShard` will make the bot leave a specific thread.

## الاستخدام

```php
$leaveThread[channelID;threadID]
```

## البارامترات

| Field     | النوع   | الديسكبربشين                                             | مطلوب |
| --------- | ------- | -------------------------------------------------------- |:-----:|
| channelID | Integer | The ID of the channel of where the thread is located in. | true  |
| threadID  | Integer | The ID of the thread.                                    | true  |

## مثال

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