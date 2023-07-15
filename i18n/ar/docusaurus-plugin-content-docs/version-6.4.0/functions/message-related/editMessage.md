---
title: '$editMessage'
description: '$editMessage will edit a given message.'
id: editMessage
---

`$editMessage` will edit a given message.

## الاستخدام

```php
$editMessage[messageID;content;channelID?]
```

## البارامترات

| Field      | النوع   | الديسكبربشين                                       | مطلوب |
| ---------- | ------- | -------------------------------------------------- |:-----:|
| messageID  | Integer | The message that should be edited.                 | true  |
| content    | string  | The content of the new message.                    | true  |
| channelID? | Integer | The channel ID of where the message is located in. | false |

You can only edit messages that were sent by the bot itself.

## مثال

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