---
title: '$deleteChannel'
description: '$deleteChannel will delete a specific channel.'
id: deleteChannel
---

`$deleteChannel` will delete a specific channel.

## الاستخدام

```php
$deleteChannel[channelID]
```

## البارامترات

| Field     | النوع   | الديسكبربشين                                         | مطلوب |
| --------- | ------- | ---------------------------------------------------- |:-----:|
| channelID | Integer | The channel ID of the channel which will be deleted. | true  |

## مثال

This will delete the channel where the command was executed in:

```javascript
bot.command({
    name: 'deleteChannel',
    code: `
  $deleteChannel[$channelID]
  `
});
```
