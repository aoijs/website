---
title: '$messageFlags'
description: '$messageFlags will return a message''s flags.'
id: messageFlags
---

`$messageFlags` will return a message's flags.

## الاستخدام

```php
$messageFlags[messageID;sep?;channelID?]
```

## البارامترات

| Field      | النوع   | الديسكبربشين                                       | مطلوب |
| ---------- | ------- | -------------------------------------------------- |:-----:|
| messageID  | Integer | The ID of the message.                             | true  |
| sep?       | string  | Separator to separate returned values.             | false |
| channelID? | Integer | ID of the channel where the message is located in. | false |

## مثال

This will the message flags of your initial command message:

```javascript
bot.command({
    name: 'messageFlags',
    code: `
  $messageFlags[$messageID;, ;$channelID]
  `
});
```
