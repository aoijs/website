---
title: '$sendDm'
description: '$sendDm will Direct Message a given user.'
id: sendDm
---

`$sendDm` will Direct Message a given user.

## الاستخدام

```php
$sendDm[message;userID?;returnID?]
```

## البارامترات

| Field     | النوع   | الديسكبربشين                                              | مطلوب |
| --------- | ------- | --------------------------------------------------------- |:-----:|
| message   | string  | The content of the Direct Message.                        | true  |
| userID?   | string  | The user that will receive the DM.                        | false |
| returnID? | boolean | Return message ID?  <br /> 1. true. false (default) | false |

## مثال

This will send a DM to the command author:

```javascript
bot.command({
    name: 'sendDm',
    code: `
   $sendDm[Hello!;$authorID;false]  
  `
});
```