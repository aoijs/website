---
title: '$isThread'
description: '$isThread will check if the given channel is a thread or not.'
id: isThread
---

`$isThread` will check if the given channel is a thread or not.

## الاستخدام

```php
$isThread[channelID?]
```

## البارامترات

| Field      | النوع   | الديسكبربشين                              | مطلوب |
| ---------- | ------- | ----------------------------------------- |:-----:|
| channelID? | Integer | ID of the channel that you want to check. | false |

## مثال

This will return either `true` or `false` depending on if you're executing the command in a thread:

```javascript
bot.command({
    name: 'isThread',
    code: `
  $isThread[$channelID]
  `
});
```