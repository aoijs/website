---
title: '$isVoice'
description: '$isVoice will check if the given channel is a voice channel or not.'
id: isVoice
---

`$isVoice` will check if the given channel is a voice channel or not.

## प्रोयोग

```php
$isVoice[channelID]
```

## पैरामीटर्स

| फील्ड     | टाइप    | डिस्क्रिप्शन                                                      | चाहिए |
| --------- | ------- | ----------------------------------------------------------------- |:-----:|
| channelID | integer | ID of the channel that you want to check if it's a Voice Channel. | true  |

## ट्रू (हा)

This will return either `true` or `false` depending on what you use as argument:

```javascript
bot.command({
    name: 'isVoice',
    code: `
  $isVoice[$channelID]
  `
});
```