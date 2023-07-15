---
title: '$setChannelTopic'
description: '$setChannelTopic will modify a channel''s topic.'
id: setChannelTopic
---

`$setChannelTopic` will modify a channel's topic.

## الاستخدام

```php
$setChannelTopic[channelID;topic]
```

## البارامترات

| Field     | النوع   | الديسكبربشين                                        | مطلوب |
| --------- | ------- | --------------------------------------------------- |:-----:|
| channelID | Integer | The ID of the channel whose topic will be modified. | true  |
| topic     | string  | Content of the new channel topic.                   | true  |

## مثال

This will change the topic of the channel where the command is executed in:

```javascript
bot.command({
    name: 'setChannelTopic',
    code: `
   $setChannelTopic[$channelID;Hello! This is the new channel topic!]`
});
```