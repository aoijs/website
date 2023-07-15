---
title: '$channelName'
description: '$channelName will return the channel name of the given channel.'
id: channelName
---

`$channelName` will return the channel name of the given channel.

## प्रोयोग

```php
$channelName[channelID?]
```

## पैरामीटर्स

| फील्ड      | टाइप    | डिस्क्रिप्शन                                            |    चाहिए     |
| ---------- | ------- | ------------------------------------------------------- |:------------:|
| channelID? | integer | Channel ID of the channel you want the channel name of. | असत्य (नहीं) |

## ट्रू (हा)

This will return the channel name of the channel where you executed the command in:

```javascript
bot.command({
    name: 'channelName',
    code: `
  $channelName[$channelID]
  `
});
```