---
title: '$messageURL'
description: '$messageURL will return the URL of a given message.'
id: messageURL
---

`$messageURL` will return the URL of a given message.

## الاستخدام

```php
$messageURL[messageID?;channelID?]
```

## البارامترات

| Field      | النوع   | الديسكبربشين                                       | مطلوب |
| ---------- | ------- | -------------------------------------------------- |:-----:|
| messageID? | Integer | ID of the message.                                 | false |
| channelID? | Integer | ID of the message where the message is located in. | false |

## مثال

This will return the message URL of the message which executed the command:

```javascript
bot.command({
    name: 'messageURL',
    code: `
  $messageURL[$messageID;$channelID]
  `
});
```
