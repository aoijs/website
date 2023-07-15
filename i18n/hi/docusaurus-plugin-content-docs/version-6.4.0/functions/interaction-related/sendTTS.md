---
title: '$sendTTS'
description: '$sendTTS will send a text-to-speech message in a given channel.'
id: sendTTS
---

`$sendTTS` will send a text-to-speech message in a given channel.

## प्रोयोग

```php
$sendTTS[channelID;message;returnID?]
```

## पैरामीटर्स

| फील्ड     | टाइप     | डिस्क्रिप्शन                                                                     |    चाहिए     |
| --------- | -------- | -------------------------------------------------------------------------------- |:------------:|
| channelID | integer  | The ID of the channel where the Text-To-Speech message will be sent.             |     true     |
| message   | स्ट्रिंग | The content of the TTS message.                                                  |     true     |
| returnID? | boolean  | Return message ID?  <br /> 1. **true** <br /> 2. **false** (default) | असत्य (नहीं) |

## ट्रू (हा)

This will send a TTS message in the current channel:

```javascript
bot.command({
    name: 'sendTTS',
    code: `
   $sendTTS[$channelIDHello!;false]
  `
});
```