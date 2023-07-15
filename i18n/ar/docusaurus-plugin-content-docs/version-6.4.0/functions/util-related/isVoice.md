---
title: '$isVoice'
description: '$isVoice will check if the given channel is a voice channel or not.'
id: isVoice
---

`$isVoice` will check if the given channel is a voice channel or not.

## الاستخدام

```php
$isVoice[channelID]
```

## البارامترات

| Field     | النوع   | الديسكبربشين                                                      | مطلوب |
| --------- | ------- | ----------------------------------------------------------------- |:-----:|
| channelID | Integer | ID of the channel that you want to check if it's a Voice Channel. | true  |

## مثال

This will return either `true` or `false` depending on what you use as argument:

```javascript
bot.command({
    name: 'isVoice',
    code: `
  $isVoice[$channelID]
  `
});
```