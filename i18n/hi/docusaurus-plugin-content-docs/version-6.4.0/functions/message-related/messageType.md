---
title: '$messageType'
description: '$messageType will return the type of a given message.'
id: messageType
---

`$messageType` will return the type of a given message.

## प्रोयोग

```php
$messageType[messageID?;channelID?]
```

## पैरामीटर्स

| फील्ड      | टाइप    | डिस्क्रिप्शन                                       |    चाहिए     |
| ---------- | ------- | -------------------------------------------------- |:------------:|
| messageID? | integer | ID of the message.                                 | असत्य (नहीं) |
| channelID? | integer | ID of the channel where the message is located in. | असत्य (नहीं) |

## ट्रू (हा)

This will return the message type of the message which executed the command:

```javascript
bot.command({
    name: 'messageType',
    code: `
  $messageType[$messageID;$channelID]
  `
});
```
