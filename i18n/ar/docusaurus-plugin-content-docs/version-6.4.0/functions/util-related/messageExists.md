---
title: '$messageExists'
description: '$messageExists will check if a specific message exists.'
id: messageExists
---

`$messageExists` will check if a specific message exists.

## الاستخدام

```php
$messageExists[messageID;channelID?]
```

## البارامترات

| Field      | النوع   | الديسكبربشين                                | مطلوب |
| ---------- | ------- | ------------------------------------------- | ----- |
| messageID  | Integer | the id of the message                       | true  |
| channelID? | Integer | the channel id where the message is located | false |

## مثال

This will return `false` as the message doesn't exist in the given channel:

```javascript
bot.command({
    name: 'messageExists',
    code: `
  $messageExists[1058998634823299143;$channelID]
  `
});
```
