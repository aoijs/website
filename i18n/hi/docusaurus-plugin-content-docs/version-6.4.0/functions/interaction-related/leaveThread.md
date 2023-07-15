---
title: '$leaveThread'
description: '$leaveThread will make the bot leave a specific thread.'
id: leaveThread
---

`$killShard` will make the bot leave a specific thread.

## प्रोयोग

```php
$leaveThread[channelID;threadID]
```

## पैरामीटर्स

| फील्ड     | टाइप    | डिस्क्रिप्शन                                             | चाहिए |
| --------- | ------- | -------------------------------------------------------- |:-----:|
| channelID | integer | The ID of the channel of where the thread is located in. | true  |
| threadID  | integer | The ID of the thread.                                    | true  |

## ट्रू (हा)

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