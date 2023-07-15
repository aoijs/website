---
title: '$pinMessage'
description: '$pinMessage will pin a given message.'
id: pinMessage
---

`$pinMessage` will pin a given message.

## प्रोयोग

```php
$pinMessage[messageID?;channelID?]
```

## पैरामीटर्स

| फील्ड     | टाइप    | डिस्क्रिप्शन                                       |    चाहिए     |
| --------- | ------- | -------------------------------------------------- |:------------:|
| messageID | integer | The ID of the message that will be pinned.         | असत्य (नहीं) |
| channelID | integer | The channel ID of where the message is located in. | असत्य (नहीं) |

## ट्रू (हा)

This will pin the bot's message:

```javascript
bot.command({
    name: 'pinMessage',
    code: `
  $pinMessage[$get[id]]
  $let[id;$sendMessage[Hello!;true]
  ` // using $let & $get to save the message ID
});
```