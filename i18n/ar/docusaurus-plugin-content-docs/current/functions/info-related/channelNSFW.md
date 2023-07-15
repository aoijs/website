---
title: '$channelNSFW'
description: '$channelNSFW will return true or false depending if the given channel is marked as NSFW or not.'
id: channelNSFW
---

`$channelNSFW` will return true or false depending if the given channel is marked as NSFW or not.

## الاستخدام

```php
$channelNSFW[channelID?]
```

## البارامترات

| Field      | النوع   | الديسكبربشين                                                      | مطلوب |
| ---------- | ------- | ----------------------------------------------------------------- |:-----:|
| channelID? | Integer | ID of the channel you want to check if its marked as NSFW or not. | false |

## مثال

This will return either `true` or `false` depending on if the channel where you execute the command is marked as NSFW or not:

```javascript
bot.command({
    name: 'channelNSFW',
    code: `
  $channelNSFW[$channelID]
  `
});
```