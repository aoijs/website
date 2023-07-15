---
title: '$sendMessage'
description: '$sendMessage will send a message in the execution channel.'
id: sendMessage
---

`$sendMessage` will send a message in the execution channel.

## الاستخدام

```php
$sendMessage[content;returnID?]
```

## البارامترات

| Field     | النوع   | الديسكبربشين                                              | مطلوب |
| --------- | ------- | --------------------------------------------------------- |:-----:|
| content   | string  | Message Content to send.                                  | true  |
| returnID? | boolean | Return message ID?  <br /> 1. true. false (default) | false |

## مثال

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