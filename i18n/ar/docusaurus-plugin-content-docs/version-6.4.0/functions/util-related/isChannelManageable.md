---
title: '$isChannelManageable'
description: '$isChannelManageable will check if the channel is manageable or not.'
id: isChannelManageable
---

`$isChannelManageable` will check if the channel is manageable or not.

## الاستخدام

```php
$isChannelManageable[channelID?]
```

## البارامترات

| Field      | النوع   | الديسكبربشين                                                    | مطلوب |
| ---------- | ------- | --------------------------------------------------------------- |:-----:|
| channelID? | Integer | ID of the channel to check if the channel is manageable or not. | false |

## مثال

This will return `true` or `false` depending on if the channel you're executing the command in is manageable:

```javascript
bot.command({
    name: 'isChannelManageable',
    code: `
  $isChannelManageable[$channelID]
  `
});
```
