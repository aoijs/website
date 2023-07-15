---
title: '$channelTopic'
description: '$channelTopic will return the given channel''s topic.'
id: channelTopic
---

`$channelTopic` will return the given channel's topic.

## الاستخدام

```php
$channelTopic[channelID?]
```

## البارامترات

| Field      | النوع   | الديسكبربشين                                                  | مطلوب |
| ---------- | ------- | ------------------------------------------------------------- |:-----:|
| channelID? | Integer | ID of the channel you want it to return the channel topic of. | false |

## مثال

This will return the channel topic of the channel where you execute the command in:

```javascript
bot.command({
    name: 'channelTopic',
    code: `
  $channelTopic[$channelID]
  `
});
```