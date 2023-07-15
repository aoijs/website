---
title: '$sendTTS'
description: '$sendTTS will send a text-to-speech message in a given channel.'
id: sendTTS
---

`$sendTTS` will send a text-to-speech message in a given channel.

## Використання

```php
$sendTTS[channelID;message;returnID?]
```

## Параметри

| Поле      | Тип     | Опис                                                                             | Обов'язковий |
| --------- | ------- | -------------------------------------------------------------------------------- |:------------:|
| channelID | integer | The ID of the channel where the Text-To-Speech message will be sent.             |     так      |
| message   | рядок   | The content of the TTS message.                                                  |     так      |
| returnID? | boolean | Return message ID?  <br /> 1. **true** <br /> 2. **false** (default) |      ні      |

## Приклад(и)

This will send a TTS message in the current channel:

```javascript
bot.command({
    name: 'sendTTS',
    code: `
   $sendTTS[$channelIDHello!;false]
  `
});
```