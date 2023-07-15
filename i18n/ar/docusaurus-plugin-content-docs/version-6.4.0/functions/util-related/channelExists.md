---
title: '$channelExists'
description: '$channelExists will check if the given channel exists.'
id: channelExists
---

`$channelExists` will check if the given channel exists.

## الاستخدام

```php
$channelExists[channel]
```

## البارامترات

| Field   | النوع           | الديسكبربشين                | مطلوب |
| ------- | --------------- | --------------------------- |:-----:|
| channel | string, integer | Channel ID or channel name. | true  |

## مثال

This will check if a channel with the name `general` exists, alternatively you could use the channel ID instead:

```javascript
bot.command({
    name: 'channelExists',
    code: `
  $channelExists[general]
  `
});
```
