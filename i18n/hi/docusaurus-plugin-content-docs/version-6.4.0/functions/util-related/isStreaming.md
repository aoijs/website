---
title: '$isStreaming'
description: '$isStreaming will check if one user is streaming in a voice channel.'
id: isStreaming
---

`$isStreaming` will check if one user is streaming in a voice channel.

## प्रोयोग

```php
$isStreaming[userID?;guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन                                           |    चाहिए     |
| -------- | ------- | ------------------------------------------------------ |:------------:|
| userID?  | integer | ID of the user you want to check if they're streaming. | असत्य (नहीं) |
| guildID? | integer | ID of the channel where they're streaming in.          | असत्य (नहीं) |

## ट्रू (हा)

This will return either `true` or `false` depending on if you're streaming (voice channel) or not:

```javascript
bot.command({
    name: 'isStreaming',
    code: `
  $isStreaming[$authorID;$guildID]
  `
});
```
