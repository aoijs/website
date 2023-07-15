---
title: '$channelCategoryID'
description: '$channelCategoryID will return the parent of a specific channel.'
id: channelCategoryID
---

`$channelCategoryID` will return the parent of a specific channel.

## प्रोयोग

```php
$channelCategoryID[channelID?]
```

## पैरामीटर्स

| फील्ड      | टाइप    | डिस्क्रिप्शन                                                 |    चाहिए     |
| ---------- | ------- | ------------------------------------------------------------ |:------------:|
| channelID? | integer | ID of a channel of which you want to retrieve its parent of. | असत्य (नहीं) |

## ट्रू (हा)

This will return the category ID of the text channel in where you execute the command:

```javascript
bot.command({
    name: 'channelCategoryID',
    code: `
  $channelCategoryID[$channelID]
  `
});
```