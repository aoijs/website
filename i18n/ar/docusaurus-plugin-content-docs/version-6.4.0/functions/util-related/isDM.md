---
title: '$isDM'
description: '$isDM will check if the given channel is a DM or not.'
id: isDM
---

`$isDM` will check if the given channel is a DM or not.

## الاستخدام

```php
$isDM[channelID?]
```

## البارامترات

| Field      | النوع   | الديسكبربشين                              | مطلوب |
| ---------- | ------- | ----------------------------------------- |:-----:|
| channelID? | Integer | ID of the channel that you want to check. | false |

## مثال

This will return either `true` or `false` depending on if you're executing the command in a DM or not:

```javascript
bot.command({
    name: 'isDM',
    code: `
  $isDM[$channelID]
  `
});
```