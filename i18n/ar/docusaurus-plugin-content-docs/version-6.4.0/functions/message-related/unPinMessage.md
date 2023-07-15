---
title: '$unPinMessage'
description: '$unPinMessage will unpin a given message.'
id: unPinMessage
---

`$unPinMessage` will unpin a given message.

## الاستخدام

```php
$unPinMessage[messageID?;channelID?]
```

## البارامترات

| Field     | النوع   | الديسكبربشين                                              | مطلوب |
| --------- | ------- | --------------------------------------------------------- |:-----:|
| messageID | Integer | The ID of the message to unpin.                           | false |
| channelID | Integer | The ID of the channel of where the message is located in. | false |

## مثال

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