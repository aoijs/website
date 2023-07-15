---
title: '$channelID'
description: '$channelID will return the channel ID of the given channel name.'
id: channelID
---

`$channelID` will return the channel ID of the given channel name.

## الاستخدام

```php
$channelID[name?]
```

## البارامترات

| Field | النوع   | الديسكبربشين                                            | مطلوب |
| ----- | ------- | ------------------------------------------------------- |:-----:|
| name? | Integer | Channel name of the channel you want the channel ID of. | false |

## مثال

This will return the channel ID of the channel where you execute the command in:

```javascript
bot.command({
    name: 'channelID',
    code: `
  $channelID
  `
});
```