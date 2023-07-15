---
title: '$sendCrosspostingMessage'
description: '$sendCrosspostingMessage will crosspost a given message to the given channels.'
id: sendCrosspostingMessage
---

`$sendCrosspostingMessage` will crosspost a given message to the given channels.

## الاستخدام

```php
$sendCrosspostingMessage[content;...channelIDs]
```

## البارامترات

| Field         | النوع   | الديسكبربشين                     | مطلوب |
| ------------- | ------- | -------------------------------- |:-----:|
| content       | string  | The message to send.             | true  |
| ...channelIDs | Integer | Where to send the given message. | true  |

## مثال

This will crosspost a message to multiple channels in your server:

```javascript
bot.command({
    name: 'sendCrosspostingMessage',
    code: `
   $sendCrosspostingMessage[Hello!;$channelID;$randomChannelID]
  `
});
```
