---
title: '$messageFlags'
description: '$messageFlags will return a message''s flags.'
id: messageFlags
---

`$messageFlags` will return a message's flags.

## प्रोयोग

```php
$messageFlags[messageID;sep?;channelID?]
```

## पैरामीटर्स

| फील्ड      | टाइप     | डिस्क्रिप्शन                                       |    चाहिए     |
| ---------- | -------- | -------------------------------------------------- |:------------:|
| messageID  | integer  | The ID of the message.                             |     true     |
| sep?       | स्ट्रिंग | Separator to separate returned values.             | असत्य (नहीं) |
| channelID? | integer  | ID of the channel where the message is located in. | असत्य (नहीं) |

## ट्रू (हा)

This will the message flags of your initial command message:

```javascript
bot.command({
    name: 'messageFlags',
    code: `
  $messageFlags[$messageID;, ;$channelID]
  `
});
```
