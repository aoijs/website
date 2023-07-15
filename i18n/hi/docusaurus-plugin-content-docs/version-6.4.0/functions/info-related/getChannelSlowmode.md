---
title: '$getChannelSlowmode'
description: '$getChannelSlowmode will return a channel''s slowmode in seconds.'
id: getChannelSlowmode
---

`$getChannelSlowmode` will return a channel's slowmode in seconds.

## प्रोयोग

```php
$getChannelSlowmode[channelID?]
```

## पैरामीटर्स

| फील्ड      | टाइप    | डिस्क्रिप्शन                                                             |    चाहिए     |
| ---------- | ------- | ------------------------------------------------------------------------ |:------------:|
| channelID? | integer | ID of the channel where you want the channel slowmode to be returned of. | असत्य (नहीं) |

## ट्रू (हा)

This will return the slowmode of the channel where you execute the command in:

```javascript
bot.command({
    name: 'getChannelSlowmode',
    code: `
  The current channel slowmode is: $getChannelSlowmode[$channelID] seconds!
  `
});
```