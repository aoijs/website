---
title: '$channelSendMessage'
description: '$channelSendMessage will send a message in a specific channel.'
id: channelSendMessage
---

`$channelSendMessage` will send a message in a specific channel.

## प्रोयोग

```php
$channelSendMessage[channelID;content;returnID?]
```

## पैरामीटर्स

| फील्ड     | टाइप     | डिस्क्रिप्शन                                                                                              |    चाहिए     |
| --------- | -------- | --------------------------------------------------------------------------------------------------------- |:------------:|
| channelID | integer  | Where the messages shall be sent to.                                                                      |     true     |
| content   | स्ट्रिंग | What the content of the message should be.                                                                |     true     |
| returnID? | boolean  | If the message ID should be returned or not. <br /> 1. **true** <br /> 2. **false** (default) | असत्य (नहीं) |

## ट्रू (हा)

This will send "Hello!" to the current channel:

```javascript
bot.command({
    name: 'channelSendMessage',
    code: `
  $channelSendMessage[$channelID;Hello!;false]
  `
});
```

### Embeds

This will send an embed with description and footer to the current channel:

```javascript
bot.command({
    name: 'channelSendMessage',
    code: `
  $channelSendMessage[$channelID;{newEmbed:{title:Hello}{footer:Bye}};false]
  `
});
```
