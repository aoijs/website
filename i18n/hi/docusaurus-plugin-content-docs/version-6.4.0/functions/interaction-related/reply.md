---
title: '$reply'
description: '$reply will reply to a given message.'
id: reply
---

`$reply` will reply to a given message.

## प्रोयोग

```php
$reply[messageID?;mentionUser?]
```

## पैरामीटर्स

| फील्ड        | टाइप    | डिस्क्रिप्शन                                                                                   |    चाहिए     |
| ------------ | ------- | ---------------------------------------------------------------------------------------------- |:------------:|
| messageID?   | integer | The ID of the message that will be replied to.                                                 | असत्य (नहीं) |
| mentionUser? | boolean | Mention the author in the reply? <br /> 1. **true** (default)  <br /> 2. **false** | असत्य (नहीं) |

## ट्रू (हा)

This will reply to your command message:

```javascript
bot.command({
    name: 'reply',
    code: `
   Hello!
   $reply[$messageID;true]
  `
});
```