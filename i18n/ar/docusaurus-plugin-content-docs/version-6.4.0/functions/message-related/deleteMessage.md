---
title: '$deleteMessage'
description: '$deleteMessage will delete a specific message.'
id: deleteMessage
---

`$deleteMessage` will delete a specific message.

## الاستخدام

```php
$deleteMessage[messageID;channelID]
```

## البارامترات

| Field     | النوع   | الديسكبربشين                                         | مطلوب |
| --------- | ------- | ---------------------------------------------------- |:-----:|
| messageID | Integer | The message ID of the channel which will be deleted. | true  |
| channelID | Integer | The channel ID of where the message is located in.   | false |

## مثال

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