---
title: '$deleteMessage'
description: '$deleteMessage will delete a specific message.'
id: deleteMessage
---

`$deleteMessage` will delete a specific message.

## प्रोयोग

```php
$deleteMessage[messageID;channelID]
```

## पैरामीटर्स

| फील्ड     | टाइप    | डिस्क्रिप्शन                                         |    चाहिए     |
| --------- | ------- | ---------------------------------------------------- |:------------:|
| messageID | integer | The message ID of the channel which will be deleted. |     true     |
| channelID | integer | The channel ID of where the message is located in.   | असत्य (नहीं) |

## ट्रू (हा)

This will send and delete the sent message after 15 seconds ( we are using $let and $get to temporary store the message ID ):

```javascript
bot.command({
    name: 'deleteMessage',
    code: `
  $deleteMessage[$get[id];$channelID]
  $let[id;$sendMessage[Hello!;true]]
  `
});
```