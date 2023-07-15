---
title: '$channelType'
description: '$channelType will return the given channel''s type.'
id: channelType
---

`$channelType` will return the given channel's type.

## प्रोयोग

```php
$channelType[channelID?]
```

## पैरामीटर्स

| फील्ड      | टाइप    | डिस्क्रिप्शन                                                |    चाहिए     |
| ---------- | ------- | ----------------------------------------------------------- |:------------:|
| channelID? | integer | ID of the channel you want the channel type to be returned. | असत्य (नहीं) |

## ट्रू (हा)

This will return the channel type of the channel where you execute the command in:

```javascript
bot.command({
    name: 'channelType',
    code: `
  $channelType[$channelID]
  `
});
```