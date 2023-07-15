---
title: '$channelNSFW'
description: '$channelNSFW will return true or false depending if the given channel is marked as NSFW or not.'
id: channelNSFW
---

`$channelNSFW` will return true or false depending if the given channel is marked as NSFW or not.

## प्रोयोग

```php
$channelNSFW[channelID?]
```

## पैरामीटर्स

| फील्ड      | टाइप    | डिस्क्रिप्शन                                                      |    चाहिए     |
| ---------- | ------- | ----------------------------------------------------------------- |:------------:|
| channelID? | integer | ID of the channel you want to check if its marked as NSFW or not. | असत्य (नहीं) |

## ट्रू (हा)

This will return either `true` or `false` depending on if the channel where you execute the command is marked as NSFW or not:

```javascript
bot.command({
    name: 'channelNSFW',
    code: `
  $channelNSFW[$channelID]
  `
});
```