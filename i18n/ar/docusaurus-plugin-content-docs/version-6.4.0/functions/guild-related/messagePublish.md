---
title: '$messagePublish'
description: '$messagePublish will publish a message in an announcement channel.'
id: messagePublish
---

`$messagePublish` will publish a message in an announcement channel.

## الاستخدام

```php
$messagePublish[messageID;channelID?]
```

## البارامترات

| Field      | النوع   | الديسكبربشين                                                 | مطلوب |
| ---------- | ------- | ------------------------------------------------------------ |:-----:|
| messageID  | Integer | The ID of the message which should be published.             | true  |
| channelID? | Integer | The ID of the channel where the given message is located in. | false |

## مثال

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
