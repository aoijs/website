---
title: '$isStreaming'
description: '$isStreaming will check if one user is streaming in a voice channel.'
id: isStreaming
---

`$isStreaming` will check if one user is streaming in a voice channel.

## الاستخدام

```php
$isStreaming[userID?;guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين                                           | مطلوب |
| -------- | ------- | ------------------------------------------------------ |:-----:|
| userID?  | Integer | ID of the user you want to check if they're streaming. | false |
| guildID? | Integer | ID of the channel where they're streaming in.          | false |

## مثال

This will return either `true` or `false` depending on if you're streaming (voice channel) or not:

```javascript
bot.command({
    name: 'isStreaming',
    code: `
  $isStreaming[$authorID;$guildID]
  `
});
```
