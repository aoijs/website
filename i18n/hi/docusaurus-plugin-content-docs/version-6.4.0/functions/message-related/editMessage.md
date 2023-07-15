---
title: '$editMessage'
description: '$editMessage will edit a given message.'
id: editMessage
---

`$editMessage` will edit a given message.

## प्रोयोग

```php
$editMessage[messageID;content;channelID?]
```

## पैरामीटर्स

| फील्ड      | टाइप     | डिस्क्रिप्शन                                       |    चाहिए     |
| ---------- | -------- | -------------------------------------------------- |:------------:|
| messageID  | integer  | The message that should be edited.                 |     true     |
| content    | स्ट्रिंग | The content of the new message.                    |     true     |
| channelID? | integer  | The channel ID of where the message is located in. | असत्य (नहीं) |

You can only edit messages that were sent by the bot itself.

## ट्रू (हा)

This will edit the sent message after five seconds: ( works the same way as `$editIn` )

```javascript
bot.command({
    name: 'editMessage',
    code: `
  $editMessage[$get[id];Bye!]
  $wait[5s]
  $let[id;$sendMessage[Hello!;true]]
  `
});
```