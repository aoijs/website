---
title: '$channelExists'
description: '$channelExists will check if the given channel exists.'
id: channelExists
---

`$channelExists` will check if the given channel exists.

## प्रोयोग

```php
$channelExists[channel]
```

## पैरामीटर्स

| फील्ड   | टाइप            | डिस्क्रिप्शन                | चाहिए |
| ------- | --------------- | --------------------------- |:-----:|
| channel | string, integer | Channel ID or channel name. | true  |

## ट्रू (हा)

This will check if a channel with the name `general` exists, alternatively you could use the channel ID instead:

```javascript
bot.command({
    name: 'channelExists',
    code: `
  $channelExists[general]
  `
});
```
