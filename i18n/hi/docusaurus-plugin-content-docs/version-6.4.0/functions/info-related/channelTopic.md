---
title: '$channelTopic'
description: '$channelTopic will return the given channel''s topic.'
id: channelTopic
---

`$channelTopic` will return the given channel's topic.

## प्रोयोग

```php
$channelTopic[channelID?]
```

## पैरामीटर्स

| फील्ड      | टाइप    | डिस्क्रिप्शन                                                  |    चाहिए     |
| ---------- | ------- | ------------------------------------------------------------- |:------------:|
| channelID? | integer | ID of the channel you want it to return the channel topic of. | असत्य (नहीं) |

## ट्रू (हा)

This will return the channel topic of the channel where you execute the command in:

```javascript
bot.command({
    name: 'channelTopic',
    code: `
  $channelTopic[$channelID]
  `
});
```