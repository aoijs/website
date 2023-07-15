---
title: '$isChannelManageable'
description: '$isChannelManageable will check if the channel is manageable or not.'
id: isChannelManageable
---

`$isChannelManageable` will check if the channel is manageable or not.

## प्रोयोग

```php
$isChannelManageable[channelID?]
```

## पैरामीटर्स

| फील्ड      | टाइप    | डिस्क्रिप्शन                                                    |    चाहिए     |
| ---------- | ------- | --------------------------------------------------------------- |:------------:|
| channelID? | integer | ID of the channel to check if the channel is manageable or not. | असत्य (नहीं) |

## ट्रू (हा)

This will return `true` or `false` depending on if the channel you're executing the command in is manageable:

```javascript
bot.command({
    name: 'isChannelManageable',
    code: `
  $isChannelManageable[$channelID]
  `
});
```
