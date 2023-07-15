---
title: '$channelSendMessage'
description: '$channelSendMessage will send a message in a specific channel.'
id: channelSendMessage
---

`$channelSendMessage` will send a message in a specific channel.

## الاستخدام

```php
$channelSendMessage[channelID;content;returnID?]
```

## البارامترات

| Field     | النوع   | الديسكبربشين                                                                       | مطلوب |
| --------- | ------- | ---------------------------------------------------------------------------------- |:-----:|
| channelID | Integer | Where the messages shall be sent to.                                               | true  |
| content   | string  | What the content of the message should be.                                         | true  |
| returnID? | boolean | If the message ID should be returned or not. <br /> 1. true. false (default) | false |

## مثال

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
