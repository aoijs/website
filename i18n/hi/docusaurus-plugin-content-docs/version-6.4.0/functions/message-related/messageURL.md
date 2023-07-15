---
title: '$messageURL'
description: '$messageURL will return the URL of a given message.'
id: messageURL
---

`$messageURL` will return the URL of a given message.

## प्रोयोग

```php
$messageURL[messageID?;channelID?]
```

## पैरामीटर्स

| फील्ड      | टाइप    | डिस्क्रिप्शन                                       |    चाहिए     |
| ---------- | ------- | -------------------------------------------------- |:------------:|
| messageID? | integer | ID of the message.                                 | असत्य (नहीं) |
| channelID? | integer | ID of the message where the message is located in. | असत्य (नहीं) |

## ट्रू (हा)

This will return the message URL of the message which executed the command:

```javascript
bot.command({
    name: 'messageURL',
    code: `
  $messageURL[$messageID;$channelID]
  `
});
```
