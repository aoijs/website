---
title: '$unPinMessage'
description: '$unPinMessage will unpin a given message.'
id: unPinMessage
---

`$unPinMessage` will unpin a given message.

## प्रोयोग

```php
$unPinMessage[messageID?;channelID?]
```

## पैरामीटर्स

| फील्ड     | टाइप    | डिस्क्रिप्शन                                              |    चाहिए     |
| --------- | ------- | --------------------------------------------------------- |:------------:|
| messageID | integer | The ID of the message to unpin.                           | असत्य (नहीं) |
| channelID | integer | The ID of the channel of where the message is located in. | असत्य (नहीं) |

## ट्रू (हा)

This will pin the bot's message and unpin it after two seconds:

```javascript
bot.command({
    name: 'unPinMessage',
    code: `
  $unPinMessage[$get[id]]
  $wait[2s]
  $pinMessage[$get[id]]
  $let[id;$sendMessage[Hello!;true]
  ` // using $let & $get to save the message ID
});
```