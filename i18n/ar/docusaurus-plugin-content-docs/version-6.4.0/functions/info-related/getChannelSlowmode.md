---
title: '$getChannelSlowmode'
description: '$getChannelSlowmode will return a channel''s slowmode in seconds.'
id: getChannelSlowmode
---

`$getChannelSlowmode` will return a channel's slowmode in seconds.

## الاستخدام

```php
$getChannelSlowmode[channelID?]
```

## البارامترات

| Field      | النوع   | الديسكبربشين                                                             | مطلوب |
| ---------- | ------- | ------------------------------------------------------------------------ |:-----:|
| channelID? | Integer | ID of the channel where you want the channel slowmode to be returned of. | false |

## مثال

This will return the slowmode of the channel where you execute the command in:

```javascript
bot.command({
    name: 'getChannelSlowmode',
    code: `
  The current channel slowmode is: $getChannelSlowmode[$channelID] seconds!
  `
});
```