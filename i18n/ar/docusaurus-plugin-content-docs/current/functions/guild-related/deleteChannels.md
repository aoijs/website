---
title: '$deleteChannels'
description: '$deleteChannels will delete multiple channels.'
id: deleteChannels
---

`$deleteChannels` will delete multiple channels.

## الاستخدام

```php
$deleteChannels[...channels]
```

## البارامترات

| Field       | النوع   | الديسكبربشين                                           | مطلوب |
| ----------- | ------- | ------------------------------------------------------ |:-----:|
| ...channels | Integer | The channel Ids of the channels which will be deleted. | true  |

## مثال

This will delete multiple channels, make sure to replace the arguments:

```javascript
bot.command({
    name: 'deleteChannels',
    code: `
  $deleteChannels[channelID1;channelID2;channelID3;channelID4]
  `
});
```
