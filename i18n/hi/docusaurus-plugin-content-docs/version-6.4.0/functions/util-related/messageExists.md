---
title: '$messageExists'
description: '$messageExists will check if a specific message exists.'
id: messageExists
---

`$messageExists` will check if a specific message exists.

## प्रोयोग

```php
$messageExists[messageID;channelID?]
```

## पैरामीटर्स

| फील्ड      | टाइप    | डिस्क्रिप्शन                                | चाहिए        |
| ---------- | ------- | ------------------------------------------- | ------------ |
| messageID  | integer | the id of the message                       | true         |
| channelID? | integer | the channel id where the message is located | असत्य (नहीं) |

## ट्रू (हा)

This will return `false` as the message doesn't exist in the given channel:

```javascript
bot.command({
    name: 'messageExists',
    code: `
  $messageExists[1058998634823299143;$channelID]
  `
});
```
