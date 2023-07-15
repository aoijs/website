---
title: '$messageType'
description: '$messageType will return the type of a given message.'
id: messageType
---

`$messageType` will return the type of a given message.

## الاستخدام

```php
$messageType[messageID?;channelID?]
```

## البارامترات

| Field      | النوع   | الديسكبربشين                                       | مطلوب |
| ---------- | ------- | -------------------------------------------------- |:-----:|
| messageID? | Integer | ID of the message.                                 | false |
| channelID? | Integer | ID of the channel where the message is located in. | false |

## مثال

This will return the message type of the message which executed the command:

```javascript
bot.command({
    name: 'messageType',
    code: `
  $messageType[$messageID;$channelID]
  `
});
```
