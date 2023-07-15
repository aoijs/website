---
title: '$joinThread'
description: '$joinThread will make the bot join a specific thread.'
id: joinThread
---

`$joinThread` will make the bot join a specific thread.

## प्रोयोग

```php
$joinThread[channelID;threadID]
```

## पैरामीटर्स

| फील्ड     | टाइप    | डिस्क्रिप्शन                                      | चाहिए |
| --------- | ------- | ------------------------------------------------- |:-----:|
| channelID | integer | The channel ID of where the thread is located in. | true  |
| threadID  | integer | The ID of the thread.                             | true  |

## ट्रू (हा)

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