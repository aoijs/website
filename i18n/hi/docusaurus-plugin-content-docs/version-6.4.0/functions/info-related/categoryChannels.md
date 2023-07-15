---
title: '$categoryChannels'
description: '$categoryChannels will return all channels of a given category.'
id: categoryChannels
---

`$categoryChannels` will return all channels of a given category.

## प्रोयोग

```php
$categoryChannels[categoryID;option?;sep?]
```

## पैरामीटर्स

| फील्ड      | टाइप     | डिस्क्रिप्शन                                                                                                                                               |    चाहिए     |
| ---------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |:------------:|
| categoryID | integer  | The ID of the category.                                                                                                                                    |     true     |
| option?    | स्ट्रिंग | The option the bot will return the channels in. <br /> 1. **names** - returns channel names (default)  <br /> 2. **ids** - returns channel IDs | असत्य (नहीं) |
| sep?       | स्ट्रिंग | The separator to separate the returned channels.                                                                                                           | असत्य (नहीं) |

## ट्रू (हा)

This will return all channels of the category of the channel where you execute the command in:

```javascript
bot.command({
    name: 'categoryChannels',
    code: `
  $categoryChannels[$channelCategoryID;names;, ]
  `
});
```