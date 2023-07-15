---
title: '$joinThread'
description: '$joinThread will make the bot join a specific thread.'
id: joinThread
---

`$joinThread` will make the bot join a specific thread.

## الاستخدام

```php
$joinThread[channelID;threadID]
```

## البارامترات

| Field     | النوع   | الديسكبربشين                                      | مطلوب |
| --------- | ------- | ------------------------------------------------- |:-----:|
| channelID | Integer | The channel ID of where the thread is located in. | true  |
| threadID  | Integer | The ID of the thread.                             | true  |

## مثال

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