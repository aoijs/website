---
title: '$pinMessage'
description: '$pinMessage will pin a given message.'
id: pinMessage
---

`$pinMessage` will pin a given message.

## الاستخدام

```php
$pinMessage[messageID?;channelID?]
```

## البارامترات

| Field     | النوع   | الديسكبربشين                                       | مطلوب |
| --------- | ------- | -------------------------------------------------- |:-----:|
| messageID | Integer | The ID of the message that will be pinned.         | false |
| channelID | Integer | The channel ID of where the message is located in. | false |

## مثال

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