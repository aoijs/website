---
title: '$isVideoOn'
description: '$isVideoOn checks if the given user has their video on in a voice channel.'
id: isVideoOn
---

`$isVideoOn` checks if the given user has their video on in a voice channel.

## प्रोयोग

```php
$isVideoOn[userID?;guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन                                                   |    चाहिए     |
| -------- | ------- | -------------------------------------------------------------- |:------------:|
| userID?  | integer | ID of the user who turned video on.                            | असत्य (नहीं) |
| guildID? | integer | ID of the guild you want to check if they have their video on. | असत्य (नहीं) |

## ट्रू (हा)

This will check if you're currently using the video feature in a voice channel:

```javascript
bot.command({
    name: 'isVideoOn',
    code: `
  $isVideoOn[$authorID;$guildID]
  `
});
```
