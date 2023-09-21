---
title: $sendTTS
description: $sendTTS will send a text-to-speech message in a given channel.
id: sendTTS
---

`$sendTTS` will send a text-to-speech message in a given channel.

## Usage

```php
$sendTTS[channelID;message;returnID?]
```

## Parameters

| Field     | Type    | Description                                                          | Required |
| --------- | ------- | -------------------------------------------------------------------- | :------: |
| channelID | integer | The ID of the channel where the Text-To-Speech message will be sent. |   true   |
| message   | string  | The content of the TTS message.                                      |   true   |
| returnID? | boolean | Return message ID? <br /> 1. **true** <br /> 2. **false** (default)  |  false   |

## Example(s)

This will send a TTS message in the current channel:

```javascript
client.command({
  name: "sendTTS",
  code: `
   $sendTTS[$channelID;Hello!;false]
  `,
});
```
