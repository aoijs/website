---
title: '$channelType'
description: '$channelType will return the given channel''s type.'
id: channelType
---

`$channelType` will return the given channel's type.

## الاستخدام

```php
$channelType[channelID?]
```

## البارامترات

| Field      | النوع   | الديسكبربشين                                                | مطلوب |
| ---------- | ------- | ----------------------------------------------------------- |:-----:|
| channelID? | Integer | ID of the channel you want the channel type to be returned. | false |

## مثال

This will return the channel type of the channel where you execute the command in:

```javascript
bot.command({
    name: 'channelType',
    code: `
  $channelType[$channelID]
  `
});
```