---
title: '$channelName'
description: '$channelName will return the channel name of the given channel.'
id: channelName
---

`$channelName` will return the channel name of the given channel.

## الاستخدام

```php
$channelName[channelID?]
```

## البارامترات

| Field      | النوع   | الديسكبربشين                                            | مطلوب |
| ---------- | ------- | ------------------------------------------------------- |:-----:|
| channelID? | Integer | Channel ID of the channel you want the channel name of. | false |

## مثال

This will return the channel name of the channel where you executed the command in:

```javascript
bot.command({
    name: 'channelName',
    code: `
  $channelName[$channelID]
  `
});
```