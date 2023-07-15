---
title: '$isDM'
description: '$isDM will check if the given channel is a DM or not.'
id: isDM
---

`$isDM` will check if the given channel is a DM or not.

## प्रोयोग

```php
$isDM[channelID?]
```

## पैरामीटर्स

| फील्ड      | टाइप    | डिस्क्रिप्शन                              |    चाहिए     |
| ---------- | ------- | ----------------------------------------- |:------------:|
| channelID? | integer | ID of the channel that you want to check. | असत्य (नहीं) |

## ट्रू (हा)

This will return either `true` or `false` depending on if you're executing the command in a DM or not:

```javascript
bot.command({
    name: 'isDM',
    code: `
  $isDM[$channelID]
  `
});
```