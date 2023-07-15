---
title: '$sendDm'
description: '$sendDm will Direct Message a given user.'
id: sendDm
---

`$sendDm` will Direct Message a given user.

## प्रोयोग

```php
$sendDm[message;userID?;returnID?]
```

## पैरामीटर्स

| फील्ड     | टाइप     | डिस्क्रिप्शन                                                                     |    चाहिए     |
| --------- | -------- | -------------------------------------------------------------------------------- |:------------:|
| message   | स्ट्रिंग | The content of the Direct Message.                                               |     true     |
| userID?   | स्ट्रिंग | The user that will receive the DM.                                               | असत्य (नहीं) |
| returnID? | boolean  | Return message ID?  <br /> 1. **true** <br /> 2. **false** (default) | असत्य (नहीं) |

## ट्रू (हा)

This will send a DM to the command author:

```javascript
bot.command({
    name: 'sendDm',
    code: `
   $sendDm[Hello!;$authorID;false]  
  `
});
```