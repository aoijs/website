---
title: '$sendCrosspostingMessage'
description: '$sendCrosspostingMessage will crosspost a given message to the given channels.'
id: sendCrosspostingMessage
---

`$sendCrosspostingMessage` will crosspost a given message to the given channels.

## प्रोयोग

```php
$sendCrosspostingMessage[content;...channelIDs]
```

## पैरामीटर्स

| फील्ड         | टाइप     | डिस्क्रिप्शन                     | चाहिए |
| ------------- | -------- | -------------------------------- |:-----:|
| content       | स्ट्रिंग | The message to send.             | true  |
| ...channelIDs | integer  | Where to send the given message. | true  |

## ट्रू (हा)

This will crosspost a message to multiple channels in your server:

```javascript
bot.command({
    name: 'sendCrosspostingMessage',
    code: `
   $sendCrosspostingMessage[Hello!;$channelID;$randomChannelID]
  `
});
```
