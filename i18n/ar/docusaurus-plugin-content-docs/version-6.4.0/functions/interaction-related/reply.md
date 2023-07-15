---
title: '$reply'
description: '$reply will reply to a given message.'
id: reply
---

`$reply` will reply to a given message.

## الاستخدام

```php
$reply[messageID?;mentionUser?]
```

## البارامترات

| Field        | النوع   | الديسكبربشين                                                                                   | مطلوب |
| ------------ | ------- | ---------------------------------------------------------------------------------------------- |:-----:|
| messageID?   | Integer | The ID of the message that will be replied to.                                                 | false |
| mentionUser? | boolean | Mention the author in the reply? <br /> 1. **true** (default)  <br /> 2. **false** | false |

## مثال

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