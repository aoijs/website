---
title: '$channelCategoryID'
description: '$channelCategoryID will return the parent of a specific channel.'
id: channelCategoryID
---

`$channelCategoryID` will return the parent of a specific channel.

## الاستخدام

```php
$channelCategoryID[channelID?]
```

## البارامترات

| Field      | النوع   | الديسكبربشين                                                 | مطلوب |
| ---------- | ------- | ------------------------------------------------------------ |:-----:|
| channelID? | Integer | ID of a channel of which you want to retrieve its parent of. | false |

## مثال

This will return the category ID of the text channel in where you execute the command:

```javascript
bot.command({
    name: 'channelCategoryID',
    code: `
  $channelCategoryID[$channelID]
  `
});
```