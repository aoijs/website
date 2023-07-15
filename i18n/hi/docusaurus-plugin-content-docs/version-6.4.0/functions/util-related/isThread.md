---
title: '$isThread'
description: '$isThread will check if the given channel is a thread or not.'
id: isThread
---

`$isThread` will check if the given channel is a thread or not.

## प्रोयोग

```php
$isThread[channelID?]
```

## पैरामीटर्स

| फील्ड      | टाइप    | डिस्क्रिप्शन                              |    चाहिए     |
| ---------- | ------- | ----------------------------------------- |:------------:|
| channelID? | integer | ID of the channel that you want to check. | असत्य (नहीं) |

## ट्रू (हा)

This will return either `true` or `false` depending on if you're executing the command in a thread:

```javascript
bot.command({
    name: 'isThread',
    code: `
  $isThread[$channelID]
  `
});
```