---
title: '$messagePublish'
description: '$messagePublish will publish a message in an announcement channel.'
id: messagePublish
---

`$messagePublish` will publish a message in an announcement channel.

## प्रोयोग

```php
$messagePublish[messageID;channelID?]
```

## पैरामीटर्स

| फील्ड      | टाइप    | डिस्क्रिप्शन                                                 |    चाहिए     |
| ---------- | ------- | ------------------------------------------------------------ |:------------:|
| messageID  | integer | The ID of the message which should be published.             |     true     |
| channelID? | integer | The ID of the channel where the given message is located in. | असत्य (नहीं) |

## ट्रू (हा)

This will publish a message ( will only work in announcement channels ):

```javascript
bot.command({
    name: 'messagePublish',
    code: `
  $messagePublish[$get[msgID];$channelID]
  $let[msgID;$sendMessage[Hello!;true]]
  `
});
```
