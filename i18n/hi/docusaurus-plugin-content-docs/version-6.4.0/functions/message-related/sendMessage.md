---
title: '$sendMessage'
description: '$sendMessage will send a message in the execution channel.'
id: sendMessage
---

`$sendMessage` will send a message in the execution channel.

## प्रोयोग

```php
$sendMessage[content;returnID?]
```

## पैरामीटर्स

| फील्ड     | टाइप     | डिस्क्रिप्शन                                                                     |    चाहिए     |
| --------- | -------- | -------------------------------------------------------------------------------- |:------------:|
| content   | स्ट्रिंग | Message Content to send.                                                         |     true     |
| returnID? | boolean  | Return message ID?  <br /> 1. **true** <br /> 2. **false** (default) | असत्य (नहीं) |

## ट्रू (हा)

This will send a message in the current channel:

```javascript
bot.command({
    name: 'sendMessage',
    code: `
   $sendMessage[Hello!;false]  
  `
});
```

This will send an embed in the current channel using parsers:

```javascript
bot.command({
    name: 'sendMessage',
    code: `
   $sendMessage[Hello! {newEmbed:{title:Bonjour!}};false]  
  `
});
```