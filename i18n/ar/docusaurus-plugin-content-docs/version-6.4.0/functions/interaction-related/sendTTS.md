---
title: '$sendTTS'
description: '$sendTTS will send a text-to-speech message in a given channel.'
id: sendTTS
---

`$sendTTS` will send a text-to-speech message in a given channel.

## الاستخدام

```php
$sendTTS[channelID;message;returnID?]
```

## البارامترات

| Field     | النوع   | الديسكبربشين                                                         | مطلوب |
| --------- | ------- | -------------------------------------------------------------------- |:-----:|
| channelID | Integer | The ID of the channel where the Text-To-Speech message will be sent. | true  |
| message   | string  | The content of the TTS message.                                      | true  |
| returnID? | boolean | Return message ID?  <br /> 1. true. false (default)            | false |

## مثال

This will send a TTS message in the current channel:

```javascript
bot.command({
    name: 'sendTTS',
    code: `
   $sendTTS[$channelIDHello!;false]
  `
});
```