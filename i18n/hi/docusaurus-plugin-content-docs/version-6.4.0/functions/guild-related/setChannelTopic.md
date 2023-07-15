---
title: '$setChannelTopic'
description: '$setChannelTopic will modify a channel''s topic.'
id: setChannelTopic
---

`$setChannelTopic` will modify a channel's topic.

## प्रोयोग

```php
$setChannelTopic[channelID;topic]
```

## पैरामीटर्स

| फील्ड     | टाइप     | डिस्क्रिप्शन                                        | चाहिए |
| --------- | -------- | --------------------------------------------------- |:-----:|
| channelID | integer  | The ID of the channel whose topic will be modified. | true  |
| topic     | स्ट्रिंग | Content of the new channel topic.                   | true  |

## ट्रू (हा)

This will change the topic of the channel where the command is executed in:

```javascript
bot.command({
    name: 'setChannelTopic',
    code: `
   $setChannelTopic[$channelID;Hello! This is the new channel topic!]`
});
```